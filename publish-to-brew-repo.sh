#/bin/bash

echo "Installing homebrew-npm-noob tool"
uv tool install --upgrade homebrew-npm-noob
echo "Setting up repository locally"
git clone https://github.com/AstraBert/homebrew-no-ts
cd homebrew-no-ts
mkdir -p Formula/
echo "Generating HomeBrew Formula"
noob @cle-does-things/no > Formula/cle-does-things-no.rb
echo "Configuring GitHub user"
git config user.email "github-actions[bot]@users.noreply.github.com"
git config user.name "github-actions[bot]"
echo "Pushing to GitHub"
git add .
git commit -m "Automated HomeBrew Release for no-ts"
git push -u origin main
echo "Removing local copy"
cd ..
rm -rf homebrew-no-ts
