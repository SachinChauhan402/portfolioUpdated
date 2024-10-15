import React from 'react';

const ProExp = () => {
    return (
        <section id='proexp' className='py-16'>
            <div className='container mx-auto px-4'>
                <h2 className="text-headingColor font-bold text-3xl mb-5 text-center">
                    Professional Experience
                </h2>

                {/* Experience 1 */}
                <div className='mb-8'>
                    <h3 className='text-sm text-gray-600 mb-2'>Feb 2022 - Feb 2024</h3>
                    <h4 className='text-sm text-gray-600 font-thin mb-1'>Clover Infotech Private Limited | Sector 24, Gurgaon</h4>
                    <h5 className='text-md font-thin mb-4'>Engineer - Technical Support L1</h5>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li className='text-sm font-thin'>Participated in deploying scripts and codes to the servers.</li>
                        <li className='text-sm'>Knowledgeable about JIRA and using it for internal use.</li>
                        <li className='text-sm'>Using ticketing tools like SUMMIT and working on tasks through them.</li>
                        <li className='text-sm'>Monitoring of servers using various tools like Zabbix and APM managed by TCS.</li>
                        <li className='text-sm'>Daily meetings with clients for server issues and quickly resolving production issues.</li>
                    </ul>
                </div>  

                {/* Experience 2 */}
                <div className='mb-2'>
                    <h3 className='text-sm text-gray-600 font-thin mb-2'>Dec 2017 - Feb 2022</h3>
                    <h4 className='text-sm text-gray-600 font-thin mb-1'>Hindustan Times | Sector 62, Noida</h4>
                    <h5 className='text-md font-thin mb-4'>News Retainer</h5>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li className='text-sm'>Oversaw the content that went into the publication, ensuring accuracy, clarity, and adherence to the publication's style and guidelines.</li>
                        <li className='text-sm'>Decision-Making: News Retainer's make critical decisions about which stories to prioritize and how to present them. They determine the placement of articles, headlines, and images to create an engaging and informative layout.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ProExp;
