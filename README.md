<div align="center">

## Legacy-MD

[![Made with Baileys](https://img.shields.io/badge/Made%20with-Baileys-00bcd4?style=for-the-badge)](https://github.com/WhiskeySockets/Baileys)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<div align="center"> 
  <a href="https://git.io/typing-svg"> 
    <img src="https://readme-typing-svg.demolab.com?font=Ribeye&size=50&pause=1000&color=33ff00&center=true&width=910&height=100&lines=Legacy-MD;Multi+Device+Whatsapp+Bot;Coded+By+Simbarashe+Tembo+.A." alt="Typing SVG" />
  </a> 
</div> 

<img src="./utils/bot_image.jpg">

</div>

A WhatsApp Bot Powered by SAT Limited

<p align="center">
  <b>Powerful. Flexible. Built for WhatsApp.</b>
</p><p align="center">
  A WhatsApp automation bot developed and maintained by the SAT Limited Team.
</p>

---

# 📌 About Legacy MD

Legacy MD is a WhatsApp automation bot designed to make WhatsApp interactions easier through commands, automated responses, and other useful features.

The project is part of the SAT Limited ecosystem and draws inspiration from the WhatsApp bot development community, including projects such as Knight Bot Mini and Lunr Mini.

Legacy MD is developed under the SAT Limited brand, with its own identity and configuration.

# ✨ Features

Depending on the version and configuration, Legacy MD may support features such as:

- 💬 WhatsApp command handling.
- ⚙️ Customisable command prefix.
- 👥 Group-related commands.
- 🛠️ Administrative utilities.
- 🤖 Automated responses.
- 🔐 WhatsApp account pairing.
- 🌐 Deployment on a supported hosting platform.
- 🔄 Additional commands and improvements as development continues.

The exact features available depend on the version of the bot you deploy.

---

# 🧰 Requirements

Before setting up Legacy MD, make sure you have the following:

- A WhatsApp account that you are authorised to connect.
- Access to the Legacy MD source code.
- A compatible environment for running the bot.
- A supported hosting platform.
- Internet access.
- The dependencies required by the project.

You may also need Git, Node.js, and npm if you are setting up the bot manually. Check the project's configuration files for the required versions.

---

# 🔑 Getting Your WhatsApp Pair Code

A pair code is used to link the WhatsApp account you want the bot to operate through.

Follow these general steps:

1. Open the official Legacy MD pairing-code website.
2. Enter the WhatsApp number you want to connect, using the required international format.
3. Follow the instructions displayed on the pairing page.
4. Open WhatsApp on your phone.
5. Navigate to Settings → Linked Devices → Link a Device.
6. Select the option to link using a phone number, if available.
7. Enter the pair code provided by the pairing service.
8. Wait for WhatsApp to confirm that the device has been linked.

Important: The exact pairing process depends on the pairing service and the version of Legacy MD you are using.

Never share your pair code, WhatsApp verification codes, or session credentials with anyone.


[![Generate Pair Code](https://img.shields.io/badge/Generate%20Pair%20Code-Click%20Here-brightgreen?style=for-the-badge)](https://legacy-md-bot.onrender.com)


---

# ☁️ Hosting Your Bot

⚠️ Getting a Pair Code Does Not Mean Your Bot Is Running

This is one of the most important things to understand about Legacy MD.

A pair code links your WhatsApp account, but a hosting platform is needed to keep the bot's program running.

The pairing-code website and the bot's hosting environment may be separate services.

After successfully linking your WhatsApp account, you must deploy the bot to a compatible hosting platform.

# Deployment process

1. Obtain your WhatsApp pair code.
2. Link your WhatsApp account successfully.
3. Prepare the Legacy MD source code.
4. Choose a hosting platform that supports the bot's runtime and dependencies.
5. Upload or connect your repository to the hosting platform.
6. Configure the required environment variables and settings.
7. Install the project's dependencies.
8. Configure the correct start command.
9. Start the bot and check the deployment logs.
10. Confirm that the bot connects to WhatsApp and responds to commands.

The precise commands depend on the project's "package.json", entry-point file, and deployment configuration.

🌐 Hosting platform options

You can investigate platforms such as:

- Render — suitable for supported Node.js services, subject to its current service and usage restrictions.
- Railway — a deployment platform with support for application services.
- A VPS — a virtual private server that gives you more control over the running environment.

# Official websites:

 Railway: https://railway.com/

<div align="center">
<a href="https://dashboard.katabump.com/auth/login#d6b7d6" target="_blank">
  <img src="https://img.shields.io/badge/Katabump-D6B7D6?style=for-the-badge&logo=server&logoColor=black" alt="- Katabump"/>
</a>
</div>

<div align="center">
<a href="https://render.com/" target="_blank">
  <img src="https://img.shields.io/badge/render-D6B7D6?style=for-the-badge&logo=server&logoColor=black" alt="- Render"/>
</a>
</div>


Before choosing a platform, check its current pricing, free-tier restrictions, persistent-storage support, and policies concerning long-running applications.

Important: Not every hosting plan can keep a WhatsApp bot running continuously. Choose a plan that supports the bot's requirements.

# 🔄 What happens if the hosting service stops?

If your hosting service stops the application, restarts it unexpectedly, or loses the bot's saved session, Legacy MD may disconnect from WhatsApp.

Depending on the cause, you may need to restart the application, restore its saved session, or link the account again.

Configure persistent storage or another appropriate session-persistence mechanism if the project requires it.

---

# ⚙️ Configuration

Legacy MD's settings depend on the version of the source code you are using.

Common configuration options may include:

Setting| Purpose
Bot name| Identifies the bot.
Command prefix| Defines how commands are invoked.
Owner information| Identifies the bot administrator.
Session credentials| Maintain the WhatsApp connection.
Runtime settings| Control how the application starts.
Environment variables| Supply configuration values required by the application.

Review the project's configuration files before changing any settings.

Never commit private credentials, authentication tokens, pairing codes, or WhatsApp session files to a public repository.

---

# 💻 Installation

For developers setting up the project manually:

1. Clone the repository

```bash
git clone https://github.com/sat-limited-org/Legacy-MD.git
```

2. Enter the project directory

```bash
cd Legacy-MD
```

3. Install dependencies

If the project uses npm and includes a valid "package.json", run:

```bash
npm install
```

4. Configure the application

Set the required environment variables and review the configuration files.

5. Start the bot

Use the start command defined in the project's "package.json". For example, if the project defines an npm start script:

```bash
npm start
```

Note: These are general Node.js setup instructions. Verify the repository's actual directory structure, dependencies, entry point, and start script before using them. The pairing process and application startup may require additional steps.

---

# 🛠️ Troubleshooting

The pair code is not working

- Check that you entered the correct WhatsApp number.
- Confirm that the code has not expired.
- Follow the pairing service's instructions.
- Request a new code if necessary.

The bot connects but does not respond

- Confirm that the application is running.
- Review the hosting logs for errors.
- Check the command prefix.
- Verify that the command exists in your version of the bot.
- Check whether the bot has the required permissions.

The bot disconnects after some time

- Check whether the hosting service stops inactive applications.
- Review the WhatsApp connection logs.
- Verify that the session is saved correctly.
- Check whether the application has sufficient resources.
- Follow the project's supported session-recovery procedure.

The bot stops after leaving the pairing page

Obtaining the pair code and running the bot are separate operations. Make sure the actual bot application is deployed and running on a compatible hosting platform.

---

# 🔐 Security and Responsible Use

- Keep your WhatsApp session credentials private.
- Never publish your pair code or authentication tokens.
- Do not commit secret configuration files to GitHub.
- Use the bot only with accounts you are authorised to connect.
- Respect WhatsApp's terms and applicable laws.
- Avoid spam, harassment, and unsolicited bulk messaging.
- Protect users' privacy and personal information.

You are responsible for securing your deployment and protecting the WhatsApp account connected to your bot.

---

# 👨‍💻 Development and Credits

Project: Legacy MD
Organisation: SAT Limited
Developer: Simbarashe Tembo
Maintained by: SAT Limited Team

Legacy MD is part of the SAT Limited development ecosystem.

Projects such as Knight Bot Mini and Lunr Mini are acknowledged as sources of inspiration within the bot-development journey. Any specific code reuse, licensing obligations, or third-party attributions should be documented according to the actual source code and the original projects' licences.



---

# 🤝 Contributions

Contributions, bug reports, and suggestions are welcome.

When contributing:

1. Explain the change you want to make.
2. Test your changes before submitting them.
3. Avoid including secrets or private session data.
4. Respect the licences of any third-party code used.

---

# 📞 Contact

For project-related enquiries, contact:

SAT Limited

Email: sat.limited.2026@gmail.com

YouTube: "@SimbarasheMC" 

[![SAT Limited](https://img.shields.io/badge/YT%20SAT-Limited%red?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@satlimited?si=4rkXgaFizd1LvHWE)



### Join Us

<div align="center">
  <a href="https://whatsapp.com/channel/0029Vb85zS99MF8ulfaVKD08">
    <img src="https://img.shields.io/badge/Join%20WhatsApp%20Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Join WhatsApp Channel"/>
  </a>
</div>

<div>

<div align="center">
<a href="https://chat.whatsapp.com/FaF8Z6rmDRXAqJCnkLIwaH">
    <img src="https://img.shields.io/badge/Join%20WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Join WhatsApp Group"/>
  </a>
</div>
---

# 📜 Disclaimer

Legacy MD is an independent WhatsApp automation project. Its use must comply with applicable WhatsApp policies and laws.

WhatsApp is a service of Meta. This project should not be assumed to be officially affiliated with, endorsed by, or sponsored by WhatsApp or Meta.

The developers are not responsible for misuse of the software, compromised accounts, or service interruptions caused by third-party hosting providers.

---

<p align="center">
  <b>Legacy MD — Powered by SAT Limited</b>
  <br>
  © 2026 SAT Limited. All rights reserved, subject to applicable third-party licences.
</p>
