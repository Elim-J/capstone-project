import React, { useState, useEffect } from "react";


export default function Tab({children, active = 0}) {
    const [activeTab, setActiveTab] = useState(active);
    const [tabData, setTabData] = useState([]);

    useEffect(() => {
        let data = [];
        React.Children.forEach(children, (element) => {
            if(!React.isValidElement(element)) return;
            const {props: {tab, children}, } = element;
            data.push({tab, children});
        })

        setTabData(data);
    }, [children]);

    return (
        <div className="w-100">
            <ul className="nav nav-tabs">
                {tabData.map(({tab}, i) => (
                    <li className="nav-item">
                        <a className={`nav-link ${i === activeTab ? 'active' : ''}`} 
                            href="#"
                            onClick={() => setActiveTab(i)}
                            >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="tab-content p-3">
                {tabData[activeTab] && tabData[activeTab].children}
            </div>
        </div>
    );
}
const TabPane = ({children}) => {
    return {children}
}
Tab.TabPane = TabPane;