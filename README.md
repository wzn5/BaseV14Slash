# BaseV14Slash
Base V14 com suporte a database MongoDB

---


### 🤖・Recursos do projeto:
• 1 Comando Slash (Ping);<br>
• Handler Slash e de Eventos; <br>
• Suporte MongoDB.
<br/>

---

### 🤖・Criando o bot e adicionando no servidor:
- `1.` Entre no [Discord Developer Portal](https://discord.com/developers/applications) e clique na opção `Applications`;<br>
- `2.` No lado superior direito clique no botão `New Application` e nomeie seu bot;<br>
- `3.` No lado esquerdo clique na opção `Bot`, logo seguida, no lado direito clique no botão `Add Bot`;<br>
- `4.` Role para baixo e ative as três intenções de `Privileged Gateaway Intents`:<br>
    ┕ (PRESENCE INTENT, SERVER MEMBERS INTENT e MESSAGE CONTENT INTENT);<br>
- `5.` No lado esquerdo clique na opção `OAuth2`, em seguida, `URL Generator`. Selecione os escopos `bot` e `application.commands`, role para baixo até <b>BOT PERMISSIONS</b>, selecione `Administrator` (para todas as permissões da guilda);<br>
- `6.` Copie o link que é gerado abaixo, abra uma nova aba do navegador, cole a URL, escolha um servidor onde ficará seu bot.

---

### 🤖・Configurando e instalando dependências do projeto:

- `1.` Baixe o projeto ou clone com:
```bash
git clone
```
- `2.` Abre a pasta do projeto;
- `3.` No terminal para instalação das dependências, execute o comando:
```bash
npm install
```
- `4.` Acesse `.env` e altere todos os valores:
```
token=Seu token do bot Aqui
mongourl=Sua conexão de mongodb Aqui
```

> ⚠️ Por favor, não compartilhar com alguém os dados apresentados acima, principalmente o TOKEN. Problemas relacionados com esses dados não se aplicarão ao dono desse projeto, e sim do próprio usuário, proteja bem seus dados para garantir a segurança do seu bot.

- `5.` Para iniciar o bot, basta ir no terminal, executar:
```bash
npm run start
```
OU 
```bash
node .
```
---
