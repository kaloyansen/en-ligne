import React from 'react';
import ComponentsIcon from '../images/components.svg';
import StylesIcon from '../images/styles.svg';
import BlogsIcon from '../images/blogs.svg';
import TutorialsIcon from '../images/tutorials.svg';
import Kendoka from '../images/kendoka.svg';

const Home = (props) => {
    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-12'>
                    <h1 className='welcome mb-0'>Kaloyan KRASTEV</h1>
                    <h2 className='sub-header mt-0'>concepteur développeur d'applications</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='get-started'>technologies</h1>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-6 text-right'>
                    <div className='kendoka-div'>
                        <img className='kendoka' src={Kendoka} alt='kendoka' />
                    </div>
                </div>
                <div className='col-6 components-list'>
                    <p>
                    <img src={ComponentsIcon} alt='components' />
                        <a href='https://www.telerik.com/kendo-react-ui/components/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-trial-docs-and-demos'>fortran</a>
                    </p>
                    <p>
                        <img src={StylesIcon} alt='styles' />
                        <a href='https://www.telerik.com/kendo-react-ui/components/styling/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-trial-styling'>c</a>
                    </p>
                    <p>
                        <img src={BlogsIcon} alt='blogs' />
                        <a href='https://www.telerik.com/blogs/tag/react?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-blog-react-blogs'>C++</a>
                    </p>
                    <p>
                        <img src={TutorialsIcon} alt='tutorials' />
                        <a href='https://www.telerik.com/kendo-react-ui/react-hooks-guide/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-blog-react-hooks-pp'>python</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;
