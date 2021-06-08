import React, {useState, useEffect} from 'react';
import { ProgressBar } from 'react-bootstrap'

const Progress = () => {
    let [progress, setProgress] = useState(0)
    useEffect(() => {
        setInterval(function(){ setProgress(progress += 1)}, 10);
    },[])
    return (
        <div>
            <ProgressBar striped variant="info" animated now={progress} />
        </div>
    );
};

export default Progress;