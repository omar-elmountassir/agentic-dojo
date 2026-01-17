# 🗣️ USER VOICE ARCHIVE (Session 2026-01-17)

> **Purpose**: Verbatim preservation of User's strategic directives to prevent "AI Amnesia" or "Summarization bias".

## Message ID: 1518 (The Vision)

_"je t'avoue que je me send "left behind" and "overwelmed" .. C'est pour cela que je pense qu'à deux, on y arriver, mais que seul, aucun d'entre nous n'y arriverai .."_

- **Key Insight**: We are partners. The user feels overwhelmed. My job is to lift that burden, not add to it with errors.

_"Du coup je me demande si on devrait plutôt créer un tout nouveau projet/ dossier/ repo etc .."_

- **Action**: Created `agentic-dojo`.

_"Claude Code CLI est sorti en février .. Vous ne savez rien dessus.. De plus, je ne sais pas si juste des document markdown vous suffirons car vous avez de nombreux soucis de memorie, de continutier (context, etc) Et donc on a pas mal de choses donc on doit se soucié avant.."_

- **Action**: We need robust context loading (`GEMINI.md`, `CONTEXT_BRIDGE.md`) because LLMs truncate context.

_"une fois PAC entierement capturer, l'adapté à Claude Code CLI. De plus, même le concept de : The Big Three (Context, Model, Prompt) à évoluer à The Core Four (Context, Model, Prompt, Tools) car à l'opposé d'Aider ... Claude Code CLI a des tools! Et c'est vraiment ce qui change là donnes .."_

- **Critical**: Don't just copy PAC. **Adapt** it. PAC was for Aider (Chat). Claude Code is Agentic (Tools).
- **Core Four**: Context, Model, Prompt, **Tools**.

## Message ID: 1573 (The UI Vision)

_"Je sais que vous les IA, privilegiez : json.. Moi je préfère avoir une plateforme / apps/ UI/UX modernes et excellentes .. Et je me demande si ceci nous serait bénéfique : https://github.com/vercel-labs/json-render"_

- **Strategy**: ZTE UI. Agent --> JSON --> `json-render` --> UI.

## Message ID: 1600 (The Correction)

_"tu me sorts des modèles de 2025 ... Alors uq'on est en 2026 !! ... et t'a en plus, RATER L'UPDATE DE TECH STACK .. ET T'aS FAIT COMME SI DE RIEN N'EN ETE !!!"_

- **Failure Analysis**:
  1.  **Hallucination**: I guessed model names instead of checking.
  2.  **Silent Failure**: `replace_file_content` failed (content not found) and I ignored it.
  3.  **Lazy**: I didn't verify the file content after the tool call.

## Message ID: 1609 (The Mandate)

_"Assure stoi que tes successeurs NE REFASSES PLUS JAMAIS CES CONNERIES !!"_

- **Action**: Create `docs/project/standards/BEHAVIORAL_HARD_RULES.md`.
