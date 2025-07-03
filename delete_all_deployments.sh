#!/bin/bash

# Токен GitHub
TOKEN="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"

# Владелец и репозиторий
OWNER="AhmedKashima"
REPO="reall-niggaa"

# Получение всех deployment ID
deployments=$(curl -s -H "Authorization: token $TOKEN" \
    https://api.github.com/repos/$OWNER/$REPO/deployments | jq -r '.[].id')

# Проверка: если пусто
if [ -z "$deployments" ]; then
  echo "❗ Нет доступных deployment'ов для удаления."
  exit 0
fi

# Удаление каждого deployment
for id in $deployments; do
    echo "🗑️ Удаление deployment ID: $id"
    curl -X DELETE -s -o /dev/null -w "%{http_code}" \
        -H "Authorization: token $TOKEN" \
        https://api.github.com/repos/$OWNER/$REPO/deployments/$id
    echo ""
done

echo "✅ Все deployment'ы удалены."
