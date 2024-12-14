import discord
from discord.ext import commands
from discord.ext.commands import Bot
from discord import app_commands
import os
import random

intents = discord.Intents.default()
bot = Bot(command_prefix="!", intents=intents)

USER_IDS = [1138813124946956298, 1284166245511331962]

@bot.tree.command(name="send_embed", description="Send an embed message with customizable content.")
@app_commands.describe(
    title="The title of the embed (required)",
    description="The description of the embed (required)",
    color="The color of the embed (red, blue, green) (required)",
    footer="The footer of the embed (optional)",
    image_url="The image URL for the embed (optional)"
)
async def send_embed(interaction: discord.Interaction, 
                     title: str, 
                     description: str, 
                     color: str, 
                     footer: str = None, 
                     image_url: str = None):

    # idk just basic comment bruh
    if interaction.user.id not in USER_IDS:
        await interaction.response.send_message("You do not have permission to use this command.", ephemeral=True)
        return

    embed = discord.Embed(title=title, description=description)

    if color.lower() == "red":
        embed.color = discord.Color.red()
    elif color.lower() == "blue":
        embed.color = discord.Color.blue()
    elif color.lower() == "green":
        embed.color = discord.Color.green()
    else:
        embed.color = discord.Color.default()

    if footer:
        embed.set_footer(text=footer)

    if image_url:
        embed.set_image(url=image_url)

    await interaction.response.send_message(embed=embed)

@bot.tree.command(name="random_fact", description="Get a random interesting fact")
async def random_fact(interaction: discord.Interaction):
    facts = [
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
        "Bananas are berries, but strawberries are not.",
        "Octopuses have three hearts, and their blood is blue.",
        "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the metal.",
        "Sharks existed before trees — they have been around for over 400 million years.",
        "A day on Venus is longer than a year on Venus.",
        "Wombat poop is cube-shaped to prevent it from rolling away and mark territory.",
        "Sloths can hold their breath longer than dolphins—up to 40 minutes.",
        "The human nose can detect about 1 trillion different smells.",
        "The speed of a computer mouse is measured in 'Mickeys.'",
        "A narwhal's tusk is actually an enlarged tooth.",
        "There’s enough gold in Earth's core to cover the entire planet in 1.5 feet of gold.",
        "A shrimp’s heart is in its head.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. It lasted only 38 minutes.",
        "The average person spends six months of their life waiting for red lights to turn green.",
        "A group of flamingos is called a 'flamboyance.'",
        "Cows have best friends and get stressed when they are separated.",
        "The largest snowflake ever recorded was 15 inches wide and 8 inches thick."
    ]
    fact = random.choice(facts)
    await interaction.response.send_message(f"Random Fact: {fact}")

@bot.tree.command(name="server_info", description="Get detailed information about the server")
async def server_info(interaction: discord.Interaction):
    guild = interaction.guild
    embed = discord.Embed(title=f"Server Info: {guild.name}", color=discord.Color.blurple())
    embed.add_field(name="Server ID", value=str(guild.id), inline=False)
    embed.add_field(name="Owner", value=f"{guild.owner} ({guild.owner.id})", inline=False)
    embed.add_field(name="Member Count", value=f"{guild.member_count} members", inline=False)
    embed.add_field(name="Online Members", value=str(sum(member.status != discord.Status.offline for member in guild.members)), inline=True)
    embed.add_field(name="Boost Level", value=f"Tier {guild.premium_tier}", inline=True)
    embed.add_field(name="Boost Count", value=f"{guild.premium_subscription_count} boosts", inline=True)
    embed.add_field(name="Text Channels", value=str(len(guild.text_channels)), inline=True)
    embed.add_field(name="Voice Channels", value=str(len(guild.voice_channels)), inline=True)
    embed.add_field(name="Role Count", value=str(len(guild.roles)), inline=True)
    embed.add_field(name="Emoji Count", value=str(len(guild.emojis)), inline=True)
    embed.add_field(name="Created At", value=guild.created_at.strftime("%B %d, %Y at %H:%M:%S"), inline=False)
    
    if guild.icon:
        embed.set_thumbnail(url=guild.icon.url)
    if guild.banner:
        embed.set_image(url=guild.banner.url)
        
    embed.set_footer(text=f"Requested by {interaction.user}", icon_url=interaction.user.avatar.url)
    await interaction.response.send_message(embed=embed)

@bot.tree.command(name="rizz_checker", description="This Command Checks A User Rizz Level.")
@app_commands.describe(user="The user whose rizz level you want to check.")
async def rizz_checker(interaction: discord.Interaction, user: discord.User):
    rizz_level = random.randint(0, 100)
    if rizz_level >= 100:
        remark = "😳 WOAH, You Have Maximum Level Rizz, That Made Me Love You!"
    elif rizz_level >= 90:
        remark = "🔥 WOW, Your'e The Rizz Master!"
    elif rizz_level >= 70:
        remark = "😎 You Got Cool Rizz, You Probabl Get Girl"
    elif rizz_level >= 40:
        remark = "👌 Decent Rizz But You Still Cant Get Girls"
    elif rizz_level >= 10:
        remark = "🤷 I Think You Need Learn Rizzing"
    else:
        remark = "💀 Zero Rizz, You Got No Girls"
    await interaction.response.send_message(f"{user.mention} has a Rizz level of **{rizz_level}**! {remark}")

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')
    await bot.tree.sync()

bot.run("TOKEN")
