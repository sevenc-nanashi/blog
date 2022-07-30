---
title: d.pyで複数のAudioSourceを同時に再生する
summary: d.pyで複数のAudioSourceを同時に再生したかっただけ
tags:
  - discord.py
  - Python
---

４つ目の記事。
同時再生読み上げBotというものを思いついたので作ってみた。

## コード

```python
import audioop
import discord


class MixAudioSource(discord.AudioSource):
    def __init__(self) -> None:
        super().__init__()
        self.sources = []

    def read(self) -> bytes:
        data = bytes(3840)  # 3840バイトのバッファを作成
        for source in self.sources:  # ソースを回す
            if not (d := source.read()):  # 再生終了
                source.cleanup()
                self.sources.remove(source)
            else:  # 合成
                data = audioop.add(data, d, 2)
        return data
```

#### 注意

- 常に再生中マークが出る
- 重ねれば重ねるほど音が大きくなる

## 読み上げ

```python
from os import getenv
import re
import discord
from discord.ext import commands
import aiohttp
import hashlib
import os
from dotenv import load_dotenv

from mix import MixAudioSource

load_dotenv()

bot = commands.Bot(command_prefix="!", intents=discord.Intents.all())
source = MixAudioSource()
voices = []


@bot.event
async def on_ready():
    global voices
    c: discord.VoiceClient = await bot.get_channel(int(getenv("DISCORD_VC_ID"))).connect()
    c.play(source)
    async with aiohttp.ClientSession() as session:
        async with session.get(
            "https://api.su-shiki.com/v2/voicevox/speakers/",
            params={"key": getenv("VV_KEY")},
        ) as resp:
            voices = [j["styles"][0]["id"] for j in await resp.json()]


@bot.event
async def on_message(message):
    if message.author.bot:
        return
    if message.channel.id != int(getenv("DISCORD_TC_ID")):
        return
    if not message.clean_content:
        return
    speaker = message.author.id % len(voices)
    print(f"{message.author} : {speaker}")
    content = message.clean_content
    content = re.sub(r"<a?:([a-zA-Z_]+):\d+>", r"\1", content)
    content = re.sub(r"https?://[^\s]+", r"", content)
    txt_hash = hashlib.sha256(f"{content}-{speaker}".encode("utf-8")).hexdigest()
    if not os.path.exists(f"voice/{txt_hash}.wav"):
        async with aiohttp.ClientSession() as session:
            async with session.get(
                "https://api.su-shiki.com/v2/voicevox/audio",
                params={
                    "text": content,
                    "key": getenv("VV_KEY"),
                    "speaker": voices[speaker],
                    "enable_interrogative_upspeak": "true",
                },
            ) as resp:
                with open(f"voice/{txt_hash}.wav", "wb") as f:
                    f.write(await resp.read())

    source.sources.append(discord.FFmpegPCMAudio(f"voice/{txt_hash}.wav"))


bot.run(getenv("TOKEN"))
```

面倒だったため、以下の機能が実装されていない：
- 使い終わったファイルの削除
- 任意のチャンネルへの接続
- VC外のユーザーの除外
- 辞書

## で、実用性は？

ない（断言）  
同時再生するとカオスになって面白くなるかな～？って思ってやった結果がこれだよ！

## おわり

読み上げと音楽再生を両方する的なことができそう。  
コードは自由に使ってください。  
おわり。
