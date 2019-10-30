# Dash App Demo
Dash app is an interactive web application developed by python. Our dash app contains six python files and an assets folder with images. They are App.py, Home.py, DIY.py, WebCam.py, About.py and Index.py. 

## How to run on local machine? 
- Clone the dashapp folder
- Install all packages via `pip install -r requirements.txt`
- Open terminal or command line and run following command: `python Index.py`
> * Home page shows some result of our work, including the starry night style bulter library.
> * Click the DIY bar of menu, and then upload your image to see the transfered image with starry night style
> * Click the WebCam bar of menu, and then select one of the three painting, then click start button to see the live video. Press Q to quit the camera. You can try all of the three styles.
> * About page is the information of our team member.

## How to deploy on GCP?
- Create a project on GCP
- Create a VM instance with large memory size (mine: 16 CPUS + 60GB)and configure firewall rules.
- Clone the dashapp folder
- Create a vitrual environment called `venv` for python3 
  ```
  sudo apt-get update && sudo apt install virtualenv
  virtualenv --python python3 ~/envs/venv
  source ~/envs/venv/bin/activate
  pip install -r requirements.txt
  ```
- Download the latest version of gcloud
  ```
  # delete older versions
  sudo rm /usr/share/keyrings/cloud.google.gpg
  sudo rm /usr/share/keyrings/cloud.google.gpg~ 
  sudo rm /etc/apt/sources.list.d/google-cloud-sdk.list

  # Add the Cloud SDK distribution URI as a package source
  echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

  # Import the Google Cloud Platform public key
  curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -

  # Update the package list and install the Cloud SDK
  sudo apt-get update && sudo apt-get install google-cloud-sdk
  ```
- Deploy to app engine
  ```
  gcloud init
  gcloud app deploy
  ```