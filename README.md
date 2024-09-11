# To Run DockerFile :-
  -  docker build -t express-node-app .
# To Run container From  express-node-app :-
  - docker run --name express-node-app-container -d  express-node-app
# To delete container :
  - docker rm + containername
# See All containers:-
  - docker ps
# See All Images : -
  - docker image ls
    
# To execute commad in container  :-
  - docker exec -it  express-node-app-container bash
# To Expose app-container in website :-
  - docker run --name express-node-app-container -d -p 4000:4000 express-node-app
# To See Logs :-
  - docker log express-node-app
