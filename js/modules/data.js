export const topicData = {
    identity: {
        title: "Global Identity",
        concept: "Think of this as your digital badge. Every commit you make carries your name and email — it's your signature. Without setting this up, Git won't even let you save anything.",
        useCase: "You just installed Git on a new laptop. Before you can do anything, you need to tell Git who you are so every save has your name on it.",
        steps: [
            "Open your terminal (Command Prompt, PowerShell, or Git Bash).",
            "Run <code>git config --global user.name \"Your Name\"</code> — this tags every commit with your name.",
            "Run <code>git config --global user.email \"you@email.com\"</code> — use the same email as your GitHub account.",
            "Run <code>git config --list</code> to double-check everything is correct.",
            "This is a one-time setup per machine. You never need to do it again."
        ]
    },
    new_repo: {
        title: "Project Creation",
        concept: "A repository (repo) is your project folder with superpowers. It looks normal, but Git is secretly tracking every single change inside it. You either create one from scratch or copy someone else's from GitHub.",
        useCase: "You just created a new project folder and want Git to start tracking it. Or you found a cool open-source project on GitHub and want to download the whole thing to your PC.",
        steps: [
            "Navigate to your project folder in the terminal.",
            "<code>git init</code> — turns the current folder into a Git repo. A hidden <code>.git</code> folder appears.",
            "<code>git clone [url]</code> — downloads an entire project from GitHub to your machine, with its full history.",
            "If you see a <code>.git</code> folder inside, Git is tracking. You're good to go."
        ]
    },
    saving: {
        title: "Saving Changes",
        concept: "Saving in Git is a two-step process. First, you pick what goes into the save (<code>git add</code>). Then, you confirm and label it (<code>git commit</code>). Think of <code>add</code> as putting items in a box, and <code>commit</code> as sealing and labeling that box.",
        useCase: "You just finished styling the navbar. You want to save this progress as a checkpoint before you start working on the footer.",
        steps: [
            "<code>git add .</code> — stages ALL modified files. The dot means 'everything'.",
            "<code>git add [file]</code> — stages only a specific file. Use this when you don't want to save everything yet.",
            "<code>git commit -m \"feat: styled navbar\"</code> — seals the save with a clear description of what you did.",
            "<code>git commit --amend</code> — made a typo in the last commit message? This rewrites it without creating a new commit.",
            "Write messages like a headline: what changed and why. 'fix: broken login button' beats 'updates'."
        ]
    },
    monitoring: {
        title: "Status & Review",
        concept: "<code>git status</code> is your X-ray. It shows you exactly what changed, what's ready to be saved, and what Git doesn't even know about yet. Run it all the time — it's free and it prevents mistakes.",
        useCase: "You're about to commit but can't remember if you added the new images to the staging area. A quick <code>git status</code> tells you instantly.",
        steps: [
            "Run <code>git status</code> at any point to see the current state of your project.",
            "Files in <strong style='color:#ef4444;'>RED</strong> = modified but NOT staged. Git sees the changes but won't save them yet.",
            "Files in <strong style='color:#22c55e;'>GREEN</strong> = staged and ready to be committed.",
            "Untracked files = brand new files that Git has never seen before. You need to <code>git add</code> them.",
            "Make it a habit: always run <code>git status</code> before any <code>git commit</code>."
        ]
    },
    sync: {
        title: "Remote Sync",
        concept: "Git lives on your computer. GitHub lives in the cloud. <code>push</code> sends your saves up to GitHub. <code>pull</code> downloads everyone else's saves to your machine. Without this, nobody sees your work.",
        useCase: "You finished your tasks for the day. You push your commits so your teammate can pull your code tomorrow morning and continue from where you stopped.",
        steps: [
            "<code>git push origin [branch]</code> — uploads your local commits to GitHub.",
            "<code>git pull origin [branch]</code> — downloads AND merges the latest changes from GitHub into your code.",
            "<code>git fetch</code> — downloads changes from GitHub but does NOT merge them. Useful to check what others did before merging.",
            "Golden rule: always <code>pull</code> before you start working to avoid conflicts.",
            "If <code>push</code> is rejected, it means someone else pushed before you. Pull first, then push again."
        ]
    },
    remote_mgmt: {
        title: "Remote Management",
        concept: "Think of a 'remote' like saving a contact in your phone. You give a nickname (usually 'origin') to a GitHub URL, and from then on you just use the nickname instead of typing the full address every time.",
        useCase: "You built a project locally and just created an empty repo on GitHub. Now you need to connect the two so you can push your code up to the cloud.",
        steps: [
            "Go to GitHub, create a new repository, and copy the URL.",
            "<code>git remote add origin [url]</code> — links your local project to the GitHub repo. 'origin' is just the nickname.",
            "<code>git remote -v</code> — shows all your saved remotes. Use this to verify the connection.",
            "You only need to do this once per project. After linking, just use <code>push</code> and <code>pull</code>."
        ]
    },
    branching: {
        title: "Branch Flow",
        concept: "A branch is a parallel timeline. You create one, do your experiments, and if everything breaks — the original version stays untouched. It's how professionals work on features without risking the live product.",
        useCase: "Your boss wants a dark mode feature. You create a branch called 'feat-dark-mode', work on it for days, and the main site stays perfectly fine the whole time.",
        steps: [
            "<code>git checkout -b feat-dark-mode</code> — creates a new branch and switches to it in one command.",
            "<code>git switch [branch]</code> — the modern, cleaner way to switch between existing branches.",
            "<code>git branch</code> — lists all branches. The one with a * is where you are now.",
            "<code>git branch -d [name]</code> — deletes a branch you don't need anymore (after merging it).",
            "Think of branches as save slots in a video game. You can experiment freely without overwriting your main progress."
        ]
    },
    merge: {
        title: "Code Integration (Merge)",
        concept: "Merge takes two separate branch timelines and joins them into one. It's how finished features become part of the real product. If both branches edited the same line, Git asks you to pick which version to keep — that's a 'conflict'.",
        useCase: "Your 'feat-dark-mode' branch is perfect and tested. You merge it into 'main' so users can finally see the new feature live.",
        steps: [
            "First, switch to the branch that will RECEIVE the code: <code>git switch main</code>.",
            "Run <code>git merge feat-dark-mode</code> — pulls all commits from that branch into main.",
            "If there's a conflict, Git marks the file with <code>&lt;&lt;&lt;&lt;</code> and <code>&gt;&gt;&gt;&gt;</code>. You manually choose which code to keep.",
            "After resolving conflicts, <code>git add .</code> and <code>git commit</code> to finalize the merge.",
            "Pro tip: delete the branch after merging with <code>git branch -d feat-dark-mode</code> to keep things clean."
        ]
    },
    history: {
        title: "Git History",
        concept: "<code>git log</code> is the Netflix of your code — it shows everything that ever happened, who did it, when, and why (if they wrote good commit messages). Each commit has a unique hash (ID) you can use to time-travel.",
        useCase: "A function disappeared and nobody knows who deleted it. You run git log to find the exact commit, the author, and the date it happened.",
        steps: [
            "<code>git log</code> — shows the full history with details (hash, author, date, message).",
            "<code>git log --oneline --graph</code> — a compact, visual view that shows branch curves and merges.",
            "<code>git log -n 5</code> — shows only the last 5 commits. Perfect when the history is huge.",
            "Each commit hash (like <code>a3f2c1d</code>) is a unique ID. You can use it to go back in time or reference specific changes."
        ]
    },
    diff: {
        title: "Difference Analysis",
        concept: "<code>git diff</code> shows you exactly what changed in your code, line by line. Green lines with <code>+</code> = you added something. Red lines with <code>-</code> = you removed something. Use it before committing to make sure you're not shipping garbage.",
        useCase: "You're about to commit and want to double-check you didn't accidentally leave a <code>console.log</code> or a hardcoded password in the code.",
        steps: [
            "<code>git diff</code> — shows changes in files you modified but haven't staged yet.",
            "<code>git diff --staged</code> — shows what's about to be committed (already added).",
            "<span style='color:#ef4444;'>Red lines (-)</span> = code removed. <span style='color:#22c55e;'>Green lines (+)</span> = code added.",
            "Think of it as a 'review mode' before you hit save. Catches mistakes before they become part of history."
        ]
    },
    undo: {
        title: "Undoing Mistakes",
        concept: "Messed up? Relax. Git is your safety net. <code>--soft</code> undoes the commit but keeps your code edits. <code>--hard</code> nukes everything and goes back in time. Use <code>--hard</code> with extreme caution — there's no Ctrl+Z after that.",
        useCase: "You just committed something by mistake, or the entire project broke and you just want to go back to how it was 5 minutes ago.",
        steps: [
            "<code>git reset --soft HEAD~1</code> — undoes the last commit but keeps all your code changes intact. Safe.",
            "<code>git reset --hard HEAD</code> — destroys ALL uncommitted changes and resets to the last commit. Dangerous.",
            "<code>git checkout -- [file]</code> — discards changes in a specific file only, without affecting everything else.",
            "HEAD~1 means 'one commit back'. HEAD~3 means 'three commits back'.",
            "⚠️ <code>--hard</code> permanently deletes uncommitted work. If it wasn't committed, it's gone forever."
        ]
    },
    stash: {
        title: "The Stash",
        concept: "You're in the middle of messy, unfinished code and suddenly need to switch branches for an urgent fix. <code>git stash</code> hides your mess in a secret shelf. When you come back, <code>git stash pop</code> brings everything right back where you left it.",
        useCase: "You're halfway through building a feature and your boss calls — there's a critical bug on main. You stash your work, fix the bug, then pop your stash and resume like nothing happened.",
        steps: [
            "<code>git stash</code> — saves your uncommitted changes to a hidden shelf and cleans your workspace.",
            "Now you can safely switch branches, fix bugs, or do whatever you need.",
            "<code>git stash pop</code> — restores your stashed changes and removes them from the shelf.",
            "<code>git stash list</code> — shows all stashed items if you've stashed multiple times.",
            "Think of it as pressing 'pause' on your current work without losing anything."
        ]
    }
};
