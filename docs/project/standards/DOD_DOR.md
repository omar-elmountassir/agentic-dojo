# 🚪 Definition of Done (DoD) & Ready (DoR)

> **Purpose**: Explicit gates to prevent "Rushing" and ensure "Calibration".
> **Mandate**: No task moves state without passing these checks.

## 🟢 Definition of Ready (DoR)

_When can we START a task?_

1.  **Clear Goal**: The `TaskName` is specific (not "Fix everything").
2.  **Voice Check**: Have we read the latest `USER_VOICE_ARCHIVE.md`?
3.  **Context Loaded**: Are the necessary files (`GEMINI.md`, `ROADMAP.md`) in context?
4.  **No Blockers**: Is the previous task actually _Done_ (verified)?

## 🏁 Definition of Done (DoD)

_When is a task COMPLETE?_

1.  **Protocol of Truth**:
    - [ ] No hallucinations (versions/dates verified).
    - [ ] No silent tool failures.
2.  **Artifacts**:
    - [ ] Code committed to Git.
    - [ ] Documentation updated (`ROADMAP.md` ticked).
3.  **User Handoff**:
    - [ ] "Auditor" role has verified the output.
    - [ ] User has been notified with a clear summary.

## 🧪 Calibration Gates (Specific to Lab)

_Before running an experiment:_

- [ ] **Config Check**: Is `.claude/config.json` valid?
- [ ] **Permission Check**: Are we `SafeToAutoRun` or do we need approval?
- [ ] **Rollback Plan**: If this explodes, can we `git reset`?
