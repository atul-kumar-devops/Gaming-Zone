FROM node AS build
WORKDIR /appfolder
COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build /appfolder/dist /usr/share/nginx/html