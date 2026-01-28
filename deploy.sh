#!/bin/bash
# Deploy LGI landing page
set -e

echo "🦞 Building LGI site..."
npm run build

echo "📦 Syncing to /var/www/lgi-site..."
rsync -av --delete out/ /var/www/lgi-site/
chown -R www-data:www-data /var/www/lgi-site

echo "✅ Deployed!"
