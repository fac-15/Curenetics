

# Curenetics Documentation

Find this app online at https://curenetics.netlify.com/ or run it locally: 
1. Clone this repo
2. `npm i`
3. `npm run dev` to start the development server

---

## Tech Stack: 

We implemented the following technologies to accomplish this:
- ReactJS 
- NodeJS 
- Jest
- ESLint and Prettier
- Parcel
---

## About Curenetics

The Curenetics app aims to connect cancer patients to clinical trials that are appropriate for them. It should be accessible for those who use it and give people a sense of control over their situation. Additionally, it will help clinical trial sponsors meet recruitment targets and hence save costs and reduce time to trial completion.

Dr Sola Adeleke (MRCP, MBA Oncology Research), the founder of Curenetics, is an oncologist with extensive experience in clinical trials, a clinical research fellow at UCL and is actively involved in cancer research. Sola is devoted to making clinical trials more accessible to patients and clinicians as well as matching the right patients to the right trials within the NHS.

---
 
### UI Sketches
Inital sketches were made to work out the contents and flow of the app.
![](https://i.imgur.com/mOYSg6p.jpg)

### Prototyping:
We built our original prototype in Figma. Drawing inspiration from the design of other medical apps and services. It showcases the fully fledged idea of what Curenetics will be including stretch goals such as an interactive quiz to get more information from the patient.


![spalsh page](https://www.dropbox.com/s/1d2mhd1fd9wi2o9/figma1.png?raw=1) 
![basic information form](https://user-images.githubusercontent.com/39189687/52851837-06ced700-310f-11e9-9685-85e42d444b1d.png) 
![quiz page](https://user-images.githubusercontent.com/39189687/52851834-06ced700-310f-11e9-88a1-9458cdf9d298.png) 
![results page](https://user-images.githubusercontent.com/39189687/52851839-06ced700-310f-11e9-9f1f-060164c14898.png) 
![single page view](https://user-images.githubusercontent.com/39189687/52851838-06ced700-310f-11e9-8d5b-01a3f67f612b.png)

--- 
### User journey: 

![](https://i.imgur.com/2BXBWnI.png)

Upon opening the app I as a patient am reassured that it is secure and reliable. I put in a minimum amount of information and I do not feel intimidated or frustrated by medical jargon. Finally, I am taken to a list of results which are sorted according to how relevant they are to me. When I select one trial from the list I can get more information from it.
  
---
       
### Functionality
The Curanetics app features: 
- A form for the patients to put in their search preferences. 
- A filterable list of trials that match the patient's search. 
- A single page view of each trial so the patient can learn more about trials that might suit them. 
- A button which allows the patient to download a pdf with the details of the trial on it for ease of sharing with their doctor. 
- A page of frequently asked questions to avoid confusion with any technical terms. 


What the app still needs: 
- Some data required by the app are currently not included in the API which serves as a data source for the app ( list of these below).
---

**Additions to the API required for next sprint**
- Trial title
- Starting date
- Address and postcode missing
- Trial phase 
- An edited summary
- Cut out the less relevant or too medical Keywords
- take out unrelevent trials such as trials just for women
- if travel expenses will be paid
- Trial contact person
- Trial contact person's email and phone number

--- 



### User Testing process:

#### 1. Prototype User Testing: 

For the first round of user testing, we tested our initial prototype with 3 PIs (PI: The person in charge of a clinical trial or a scientific research grant).

The feedback revolved around missing fields (trial criteria), the difference between trial phase and disease stage, and more. Detailed feedback is documented in [this issue](https://github.com/fac-15/Curenetics/issues/24). 

![testing](https://www.dropbox.com/s/2oyw012bciewfoc/testing-curenetics-susan_sm.png?raw=1)
#### 2. MVP User Testing: 

For the second round of user testing we met with two medical students. 

The feedback revolved around missing fields (trial criteria), how to improve the interface to suit elderly user, adding a way to bookmark a trial. 

We also received positive feedback on: logo, color theme, the general app idea. 

The detailed feedback is documented in [this issue](https://github.com/fac-15/Curenetics/issues/128).

---

### Next sprint goals

- Bookmark trial button 
- Sort by distance 
- Add the word 'Menu' to menu
- Add Doctor name to each trial 
- Add list of criteria to each trial 
- Remove confusing keywords (overian cancer appears when a basic info is set to 'male')


---

#### Links to other bits that may be useful:

- [QA Feedback](https://hackmd.io/pb3JifxUQp20_X-W07ZdaQ#)
- [API structure, screenshots, linter notes](https://hackmd.io/P8QEkS7pTTS-gPFd14UDVA?both)
