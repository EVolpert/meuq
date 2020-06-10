# Instalação
## Clonando o Repositório
Clone o repositório em uma pasta de sua preferência

## Instalando Dependências
### Pipenv
Instalar o pipenv, que gerencia as dependências do projeto.

Caso esteja no MacOS brew install pipenv
```brew install pipenv```

Caso esteja usando Debian Buster+
```sudo apt install pipenv```

Caso esteja usando Fedora
```sudo dnf install pipenv```

Caso esteja usando FreeBSD
```pkg install py36-pipenv```

Caso contrário
```pip install pipenv```

### NPM
Instalar o npm, que gerenria as dependências do frontend
Rode o commando ```npm install -g @angular/cli```

### Iniciando o projeto
Rode o pipenv na raíz do projeto onde estão os arquivos Pipfile e Pipfile.lock com o comando ```pipenv install```

Rode o comando ```npm install``` para instalar as dependências de front

Isso irá instalar todas as dependência internas do projeto

Inicie o virtualenv do pipenv com o comando ```pipenv shell```

Vá para a pasta raíz da aplicação em ```meuq```

Atualize as migrações padrões do django através do comando ```python manage.py migrate```

Inicie o servidor do projeto com o comando ```python manage.py runserver```

Para desativar o pipenv basta usar o comando ```exit``` ou ```Ctrl+d```

Rode o comando ```ng serve``` para rodar o servidor do frontend
