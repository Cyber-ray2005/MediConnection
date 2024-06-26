import React, { useState } from 'react';
import { AutoLoader } from '../../../../../../components/loaders';
import { TitleBar, Widget } from '../../../../../../components/widgets';

import ListSection from './listSection';
import axios from 'axios';


export default function ReportSection(props) {
    const [state, setState] = useState({
        reports: [],
        limit: 10
    });

    async function appendReports() {
        try {
            const url = `http://localhost:4090/api/users/${props.user.username}/labReports`;

            const searchParams = new URLSearchParams();
            searchParams.append('page', Math.ceil(state.reports.length / state.limit));
            searchParams.append('limit', state.limit);

            const response = await axios.get(`${url}?${searchParams.toString()}`, {
                headers: {
                    'Authorization': `Bearer ${props.session.authToken}`
                }
            });

            let newReports =  response.data;
            if (response.status !== 200) {
                throw new Error(newReports.message);
            }

            setState(prevState => {
                const updatedReports = [...prevState.reports, ...newReports];

                return {
                    ...prevState,
                    reports: updatedReports
                }
            })
        } catch (err) {
            console.error(`Failed to append more reports. ${err}`);
        }
    }

    return (
        <>
            <Widget>
                <TitleBar title="Reports"></TitleBar>
                <ListSection
                    reports={state.reports}
                />
            </Widget>
            <AutoLoader callback={appendReports} />
        </>
    );
}