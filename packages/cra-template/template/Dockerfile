### 基础镜像
FROM registry-vpc.cn-hangzhou.aliyuncs.com/eigenlab/frontend-base

### source

WORKDIR /base
COPY . /base

### webpack 打包
RUN npm install --registry=https://npm-registry.aidigger.com
RUN npm run build

RUN cp -rfp build/* /root/web/

