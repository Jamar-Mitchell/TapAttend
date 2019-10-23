# TapAttend

## Introduction

 

### Document purpose

For years, professors and teachers have been using attendance sheets to monitor class attendance. The idea of TapAttend ™ was conceived after a thorough analysis of the traditional paper-based system. TapAttend ™ is an online attendance system and its objective is to simplify the attendance-taking process and increase the accuracy of attendance records in Educational Institutions. It is a system that records attendance to a database simply by tapping your student card on the product while in the classroom. This idea is believed to hold great opportunity to satisfy both student and professor needs and deliver an easy and beneficial experience.

  

This document is intended to thoroughly describe the project- TapAttend ™ -  its requirements and deliverables, and detail the progress/ changes made from the last report up until the Winter 2018 midterm.

### Acronyms, Terms and Definitions

 

Terms, acronyms, abbreviations

 

Definitions

 

NFC

 

Near-Field Communication

 

RFID

 

Radio Frequency Identification

 

WiFi

 

Wireless Fidelity

Table 1: Table of Definitions, Acronyms and Terms

 

### References

 

[1]"Raspberry Pi 3 Model B & MIFARE RC522 RFID Tag Reading", Instructables.com, 2017. [Online]. Available: http://www.instructables.com/id/Raspberry-Pi-3-Model-B-MIFARE-RC522-RFID-Tag-Readi/. [Accessed: 11- Dec- 2017].

[2]"GPIO: Raspberry Pi Models A and B - Raspberry Pi Documentation", Raspberrypi.org, 2017. [Online]. Available: https://www.raspberrypi.org/documentation/usage/gpio/. [Accessed: 11- Dec- 2017].

[3]"Attendance Record System (Arduino + RFID)", Instructables.com, 2017. [Online]. Available: http://www.instructables.com/id/Attendance-Record-System-Arduino-RFID/. [Accessed: 11- Dec- 2017].

[4]"How to display your Raspberry Pi’s desktop on a Mac", TechTonic, 2017. [Online]. Available: https://smittytone.wordpress.com/2016/03/02/mac_remote_desktop_pi/. [Accessed: 11- Dec- 2017].

 

 

### Limitations, Issues and Concerns

 

#### Change of information

The information in this document is for informational purposes and may change at the sole discretion of CEG4912-13 without notice.

 

#### Confidential Information

This documentation contains confidential regarding TapAttendTM design specification information and is purely intended for the University of Ottawa and not for release/disclosure in whole or in part to any other party unless agreed upon in writing by CEG4912-13, Inc.

 

#### General Project Description

 

### Objective

The objectives of TapAttend ™ are to create a functional, easy-to-use and easy-to-understand electronic-based attendance system.

The major goals of TapAttend ™ are:

- To facilitate the attendance-taking process and calculations 
- To refine attendance-taking by making it more accurate and less prone to human error 
- To have easily accessible attendance records 
- To have secure attendance records 
- To encourage lecture attendance 

 

### Project Stages

1. Research & brainstorm: Coming up with various ideas to be considered as a final project.  
2. Project Proposal: Project ideas were presented to the professor pending approval. 
3. Project Approval: Approval was granted. 
4. Obtaining & exploring required components: Upon acceptance of the proposal, the following items were purchased to build the attendance system: 
    1. Raspberry Pi 
    2. RFID tags and reader 
    3. Blank RFID/NFC card (to simulate a student card) 
    4. Jump wires 

5. Building prototype: Dividing the work amongst group members to aid facilitation of the project development. Building a prototype and making sure the projects satisfies every criteria described in the proposal. This includes user testing in order to collect feedback for project improvement. 
6. Building the actual project: this is done based on new acquired information and results in a finished and testable product. 
7. Interfacing of components: Get the different components (hardware and software) to work together and in sync.  
8. Debugging and testing: All bugs should be found and errors handled appropriately so the project can be error free and reliable. 
9. Quality assurance: Prove that it accomplishes all the tasks in the most efficient way possible. 
10. Deployment of the finished project and live demonstration: Demonstrate how the system works. 

### Clients

TapAttend ™ is made to cater to the Educational Institution and People belonging to and affected by the Education Sector such as:

1. Students: This product- TapAttend™-  would be appealing to students for the ease at which attendance can be taken in classes. With attendance being mandatory more often than not, having accurate and secure records that work in their favour (by  easily and accurately providing participation/attendance marks) is an advantage.  

1. Class Instructors:TapAttend™ helps Instructors keep track of the students that actually come to lectures because they need to be physically present to be marked as “present”. The Instructors/ Teaching Assistants would no longer have to pass sheets of paper around to take attendance. There would be no need to manually log the attendance into the system after lectures or manually calculate the participation grades awarded to each student as it would be available on the system. 

1. Colleges/Universities: This new method of attendance-taking is relatively inexpensive and records can be stored for as long as the School sees fit without physically taking up space. 

 

### Participants

 

 

Person

 

Org.

 

Contact

 

Role and Contribution

 

CEG4912-13 Liaison

 

Jamar Mitchell

 

 

 

jmitc008@uottawa.ca

 

 

Mobile Application

 

 

 

Elijah Balogun

 

 

 

ebalo061@uottawa.ca

 

Website – Back end

 

 

 

Oluwatobiloba Situ

 

 

 

tsitu014@uottawa.ca

 

Website – Front end

 

 

 

Izore Omorodion

 

 

 

iomor067@uottawa.ca,

 

 

Hardware

 

 

Table 2: Project Participants

 

### Market Space and Industry Sector

TapAttend ™ aims at simplifying the attendance-taking process and increasing the accuracy of attendance records. The market space for this project is going to be focused on Educational institutions.

The product would be directed to Universities and Colleges.

### Technologies Involved

The technologies involved in this project’s development are listed in the following subsections.

#### Hardware

The expected computer hardware on which TapAttend will reside and execute are:

- RFID chip reader 
- RFID card (student card with RFID chip installed) 
- Raspberry Pi  
- LCD display  

#### Software

The software encompassed by the end product are

-  a functioning website and mobile application created with: 

o   Angular2+

o   NodeJS

o   MongoDB

o   Express framework

 

##### 3.6.2.1 Software Requirements

The TapAttend project has the following project requirements:

 

Functional Requirements:

 

F1. The TapAttend system should allow any professor register his courses (student list)

F1.1 The following information shall be obtained for a Professor's registration:

·             Course name

·             Course schedule

·             Course registration list (Student name & number)

F2. The system would record student attendance.

F3. The system will calculate each student’s total attendance based on how many times the student card was tapped while the system was activated.

 F4. Ability to delegate access (to be considered).

F5. The system should indicate when student has successfully/unsuccessfully marked attendance (LEDs).

F6. The system state reason for detected error (if light is red, attendance not)

F7. TapAttend cannot be activated at the same time by 2 different instructors (consider synchronizing TapAttend to the PC in that location)

 

Customer/Functional Requirements:

CF1. Should be able to store a large amount of attendance data.

CF2. System should receive class information as well as time so as to give activation precedence to the scheduled class’ instructor.

CF3. System should deactivate if not done by instructor after a certain amount of time (ie in the situation an instructor forgets to deactivate the system it should time out)

CF4. Easy to use UI.

CF5. Error prevention/detection.

 

Non-Functional Requirements:

NF1. Short enough frequency (RFID reader) so it doesn’t read any cards outside a specific range.

NF2. Should display only certain info read off card (eg display student number and ID not account balance).

NF3. Should be able to store a large amount of attendance data.

NF4.Specific deliverables shall be produced according to the proposal document.

  

##### 3.6.2.2 Specifications

 

Students: This product- TapAttend™-  would be appealing to students for the ease at which attendance can be taken in classes. With attendance being mandatory more often than not, having accurate and secure records that work in their favour (by  easily and accurately providing participation/attendance marks) is an advantage. 

Class Instructors:TapAttend™ helps Instructors keep track of the students that actually come to lectures because they need to be physically present to be marked as “present”. The Instructors/ Teaching Assistants would no longer have to pass sheets of paper around to take attendance. There would be no need to manually log the attendance into the system after lectures or manually calculate the participation grades awarded to each student as it would be available on the system.
