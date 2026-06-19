- /speckit.constitution — definir princípios e diretrizes
- /speckit.specify — descrever o que construir (foco no o que e por que)
- /speckit.clarify — esclarecer pontos vagos da spec
- /speckit.plan — criar plano técnico (definir tech stack)
- /speckit.analyze — verificar consistência entre spec/plan/tasks
- /speckit.tasks — gerar lista de tarefas
- /speckit.implement — executar as tarefas

Constitution atualizada — v1.0.0
Arquivo: .specify/memory/constitution.md
Princípios definidos:
1. Web-First (Static SPA) — tudo no browser, sem backend
2. Simplicity (No Frameworks) — vanilla HTML/CSS/JS, sem build tools
3. Mobile-First Responsive Design — 320px+ a desktop
4. Test-First Calculation Logic — TDD para a lógica de cálculo
5. Clean & Accessible UI — WCAG AA, cálculo em ≤3 passos
Próximos passos
Agora você pode prosseguir com o fluxo SDD:
# 1. Criar a feature spec
/speckit.specify

# 2. Esclarecer pontos vagos
/speckit.clarify

# 3. Criar plano técnico
/speckit.plan

# 4. Gerar tarefas
/speckit.tasks

# 5. Implementar
/speckit.implement
Tudo via Docker:
docker compose run --rm spec-kit init . --integration opencode