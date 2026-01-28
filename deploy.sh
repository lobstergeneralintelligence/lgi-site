#!/bin/bash
# Deploy LGI landing page
set -e

echo "🦞 Building LGI site..."
npm run build

echo "🔄 Restarting Next.js service..."
systemctl restart lgi-site

echo "✅ Deployed!"
