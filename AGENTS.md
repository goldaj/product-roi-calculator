# Instructions aux agents : Automation ROI Calculator

## Contexte et sources
- Lire d'abord `README.md`, puis **`docs/CHATGPT_PROJECT_HISTORY.md`** avant toute modification. Le second est un journal de transmission de contexte à Codex : sa couverture est **partielle** et signalée, il ne remplace pas l'historique complet des discussions.
- Objet : Estimer la valeur théorique d'une automatisation de processus par hypothèses explicites : gains mensuels nets, ROI année 1, seuil de rentabilité et valeur nette sur 36 mois.
- Le dépôt est une démonstration de portfolio Product Owner. L'interface utilisateur est en français, le README principal en anglais. Exemples fictifs, aucune donnée réelle d'entreprise.

## Travail et validation
- Préserver la structure existante ; faire des changements limités, testables et faciles à relire. Ne pas remplacer ou effacer du code, des documents ou des historiques sans nécessité explicite.
- Ne jamais confondre gains de capacité estimés et économies comptables réalisées. Conserver les formules déterministes, les cas fictifs et la transparence des hypothèses.
- Ouvrir index.html localement ; exécuter `node tests.js` (Node.js 18+) quand le code change.
- N'annoncer un test réussi que s'il a réellement été exécuté, et documenter ce qui reste non vérifié.
- Ne jamais publier de secrets, clés, jetons, données personnelles ou échanges non pertinents. Éviter d'inclure des données internes d'employeur.

## Continuité conversationnelle, obligatoire à chaque intervention
1. Consulter `docs/CHATGPT_PROJECT_HISTORY.md` pour les décisions et le contexte disponibles.
2. Pour les nouveaux échanges pertinents fournis ou accessibles **avec leurs messages exacts**, ajouter une entrée datée et étiquetée `Utilisateur (verbatim)` / `Assistant (verbatim)` ; garder l'ordre, le fuseau horaire, et distinguer les messages multiples.
3. Lorsque seul un résumé est connu, utiliser `Résumé reconstruit (non verbatim)`, jamais de fausse citation ni d'horodatage inventé ; noter les lacunes.
4. Mettre à jour le contexte si une modification change l'objectif, l'architecture, les choix de produit ou le prochain jalon. Ne pas recopier l'intégralité des conversations sans contrôle des secrets et de la confidentialité.
5. Conserver les parties historiques, ajouter les nouvelles entrées au lieu de réécrire le passé ; toute modification du journal doit être traçable dans Git.

## Sources de vérité et limites
- État du code : fichiers du dépôt et tests exécutés.
- Intention produit : README, décisions explicitement enregistrées et contexte ChatGPT documenté.
- Les discussions Codex/ChatGPT externes ne sont pas automatiquement disponibles : demander leur export ou un extrait si le texte intégral est nécessaire. Ne jamais prétendre avoir consulté des échanges non accessibles.
