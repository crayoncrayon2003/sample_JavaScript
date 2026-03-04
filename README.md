# 1. nodejs
## 1.1. install
```bash
$ sudo apt install -y nodejs npm
```

## 1.2. version
```bash
$ node -v
$ npm -v
```

## 1.3. run
```bash
$ node filename.js
```

# 2. nvm
## 1.1. install
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc

nvm install 18
nvm install 20
```

## 1.2. version
```bash
nvm use 18
> Now using node v18.20.8 (npm v10.8.2)

nvm use 20
> Now using node v20.20.0 (npm v10.8.2)
```

## 1.3. default
```bash
nvm alias default 20
```