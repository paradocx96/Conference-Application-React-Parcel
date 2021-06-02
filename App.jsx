import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

// TODO: Import Components
//HOMEPAGE
import Homepage from "./src/pages/Homepage";
import NavigationBar from "./src/components/Navbar/NavigationBar";
import FooterBar from "./src/components/Foobar/FooterBar";

//RESEARCH
import ResearchPaperUpload from "./src/components/ResearchPaper/ResearchPaperUpload";
import ResearchPaperDownload from "./src/components/ResearchPaper/ResearchPaperDownload";
import Research from "./src/components/ResearchPaper/Research";
import ViewAllResearchPapers from "./src/components/ResearchPaper/ViewAllResearchPapers";
import DeleteResearchPapers from "./src/components/ResearchPaper/DeleteResearchPapers";
import UpdateResearchPaper from "./src/components/ResearchPaper/UpdateResearchPaper";
import ViewSingleResearchPaper from "./src/components/ResearchPaper/ViewSingleResearchPaper";

//DASHBOARD
import Dashboard from "./src/pages/Dashboard";
import ReviewerDashboard from "./src/components/Reviewer/ReviewerDashboard";
import DashboardEditor from "./src/pages/DashboardEditor";

//NEWS
import NewsDashboard from "./src/components/News/NewsDashboard";
import NewsSection from "./src/components/News/NewsSection";
import AddNewsAdmin from "./src/components/News/AddNewsAdmin";

//KEYNOTES
import ViewKeyNoteDashboard from "./src/components/KeyNotes/ViewKeyNoteDashboard";
import ViewKeyNoteSection from "./src/components/KeyNotes/ViewKeyNoteSection";
import AddKeyNoteAdmin from "./src/components/KeyNotes/AddKeyNoteAdmin";

//DOWNLOAD
import DownloadSection from "./src/components/Download/DownloadSection";
import DownloadDashboard from "./src/components/Download/DownloadDashboard";
import AddDownloadAdmin from "./src/components/Download/AddDownloadAdmin";


function App() {

    return (
        <div>
            <Router>
                <NavigationBar/>
                <Switch>
                    {/* HOMEPAGE */}
                    <Route exact path="/"><Homepage/></Route>

                    {/* DASHBOARD */}
                    <Route path={'/dashboard'} exact component={Dashboard}/>
                    <Route path={'/editor-dashboard'} exact component={DashboardEditor}/>
                    <Route path={'/reviewer/dashboard'} exact component={ReviewerDashboard}/>

                    {/* KEYNOTES */}
                    <Route path={'/keynotes'} exact component={ViewKeyNoteSection}/>
                    <Route path={'/dashboard-keynotes'} exact component={ViewKeyNoteDashboard}/>
                    <Route path={'/dashboard-keynotes-add'} exact component={AddKeyNoteAdmin}/>

                    {/* NEWS */}
                    <Route path={'/news'} exact component={NewsSection}/>
                    <Route path={'/dashboard-news'} exact component={NewsDashboard}/>
                    <Route path={'/dashboard-news-add'} exact component={AddNewsAdmin}/>

                    {/* DOWNLOADS */}
                    <Route path={'/downloads'} exact component={DownloadSection}/>
                    <Route path={'/dashboard-download'} exact component={DownloadDashboard}/>
                    <Route path={'/dashboard-download-add'} exact component={AddDownloadAdmin}/>

                    {/* RESEARCH */}
                    <Route path={'/research'} exact component={Research}/>
                    <Route path={'/research/upload'} exact component={ResearchPaperUpload}/>
                    <Route path={'/research/download'} exact component={ResearchPaperDownload}/>
                    <Route path={'/research/viewAll'} exact component={ViewAllResearchPapers}/>
                    <Route path={'/research/deleteEntries'} exact component={DeleteResearchPapers}/>
                    <Route path={'/research/updatePaper'} exact component={UpdateResearchPaper}/>
                    <Route path={'/research/viewSinglePaper'} exact component={ViewSingleResearchPaper}/>

                </Switch>
            </Router>
            <FooterBar/>
        </div>
    );
}

export default App;