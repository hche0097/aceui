Title: Introducing New UI and Functional Enhancements in ACE Tooling

Introduction:

G’day, mates! Today, I’m excited to introduce the latest updates to our ACE tooling. Specifically, we’ll explore the new user interface (UI) and functional enhancements that enhance our cloud compliance monitoring and management.
ACE TCA Overview:
ACE TCA (Threat, Compliance, and Automation) is a powerful automation tool.
It provides insights into:
Cloud Compliance Components
IR (Incident Response) Threats
Countermeasure Component Status
All this information is accessible via an EIM ID.
By referencing related component SCDs (Security Control Descriptions), we improve communication efficiency during threat modeling reviews.
AWS/GCP/Azure Compliance Table:
Our AWS Compliance Tables, built using React, streamline AWS compliance management.
Key Features:
Dynamic Data Fetching: Loads compliance records via a POST request to the /api/v1/aws/compliance/records endpoint.
Search Functionality: Quickly find records by AWS EIM ID, triggering data refresh.
Loading Indicator: Enhances user experience by displaying a modal during data retrieval.
Error Alerts: Clear messages for any data fetch issues.
Responsive Table: Sortable format for detailed data review.
CSV Export: Export data for further analysis.
Input Validation: Ensures only valid EIM IDs are accepted.
Responsibility Filter: Focus on specific records based on responsibility.
TCA Reviewer Benefits:
The Compliance Dashboard:
Easily search for relevant SCD control IDs.
Use filters to check project team open issues in the Production environment.
Reviewers can download the table to assess fixable issues.
Countermeasure and Threat Tables:
Useful during BAU (Business as Usual) and CA (Change Advisory) reviews.
By entering an EIM ID:
Quickly determine countermeasure status.
Identify open issues within seconds.
Utilize search and filter functions effectively.
ODS EIM Search Table:
Provides essential information for:
Generating emails to project teams.
Completing the IR component questionnaire.
Future integration with email distribution pages for automated sending.
IR Report Section:
Added a report generation hyperlink in the sidebar.
Upcoming versions will migrate the TMA (Threat Modeling and Analysis) report function into ACE tooling.
Conclusion:

Exciting times ahead! Now, let’s move to the Q&A section. Feel free to raise your hand and ask any questions.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Hi and G’day mates, today I would like to introduce our new UI and new functional enhancement for our ACE tooling. ACE TCA is an automation tool that can display cloud compliance component, IR threat and countermeasure component status by EIM ID. Refer to related component SCDs, we can have better communication efficiency with project team in our threat modelling review.
First of all, let’s start from our AWS/GCP/Azure Compliance Table with the EIM ID 123456. The AWS Compliance Tables is a React component designed for AWS compliance management. Key features include:
•	Dynamic Data Fetching: Loads compliance records via a POST request to the /api/v1/aws/compliance/records endpoint.
•	Search Functionality: Allows searching by AWS EIM ID, triggering data refresh.
•	Loading Indicator: Displays a modal while fetching data to enhance user experience.
•	Error Alerts: Provides clear error messages for any data fetch issues.
•	Responsive Table: Presents records in a sortable table format, supporting detailed data review.
•	CSV Export: Enables exporting data to CSV for further analysis.
•	Input Validation: Ensures only valid EIM IDs are accepted.
•	Responsibility Filter: Allows filtering records by responsibility for focused data viewing.
This component simplifies AWS/GCP/Azure compliance monitoring and management, offering essential tools for TCA reviewer. In our compliance dashboard, you can easily search and find the relevant SCD control ID, also you can use the filter function to check whether project team has open issues in Production environment on the compliance check, similar as Responsibility. If a reviewer has some concerns on some of the issues, reviewer can also download this table to let project team to check whether they can fix these issues.
Countermeasure and threat table will also help while we do the BAU and CA review, especially in peer review meeting. By enter EIM ID, we can easily find out countermeasure state and whether this EIM has open issues in 10-20s. Also, we can use the search and filter function to locate the issue we want.
In the ODS EIM Search table, it will show most of the information we needed while we want to generate an email to project team or while we try to fill up the IR component questionnaire. In future, we will integrate the ODS information with email distribution pages, to see if we can implement the email automated sent function.
In the IR Report section, we have added the report generation hyper link in the sidebar. In the next or future version, we are going to migrate the TMA report function into our ACE tooling as well.
Cool, this will be the Q&A section for our presentation, please feel free to raise your hand.
