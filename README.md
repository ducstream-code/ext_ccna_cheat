to make it work:
```pip3 install -r requirements.txt```

then:  
```python3 app.py```

then in your chrome go to ```chrome://extensions/```
enable developper mode

je passe en FR flemme

Ensuite tu clique sur Charger l'extension non empaqueté tu va dans le dossier extension et tu fais ouvrir et normalement ça t'installe l'extension

Pour pouvoir l'utiliser sur d'autre site, modifier le manifest.json en mettant le domaine d'un autre site  
Pour l'utiliser sur tout les sites, rajouter dans permissions:  
```
"https://*/*",
"http://*/*" 
```
