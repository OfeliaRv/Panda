import Layout from "../components/layout/Layout"
import { Editor } from '@tinymce/tinymce-react';
import { DataContext } from '../DataContext'
import { useContext } from 'react'
import Auth from "./Auth";

const Dashboard = () => {
    const { currentUser } = useContext(DataContext);
    const [user, setUser] = currentUser;

    const handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }

    if (user === null || user === undefined) {
        return (
            <Auth />
        )
    }
    else {
        return (
            <Layout>
                <Editor
                    apiKey="mvg3ckngqlx3wg04j15oifuabymhabh11i2h6rnbkx0po4cs"
                    initialValue="<p>This is the initial content of the editor</p>"
                    init={{
                        plugins: 'link image code',
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                    }}
                    onChange={handleEditorChange}
                />
            </Layout>
        );
    }
}

export default Dashboard;