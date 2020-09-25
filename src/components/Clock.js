import React from 'react';

class Clock extends React.Component {
    render() {
        const date1 = new Date();
        const time = `${date1.getFullYear()}/${date1.getMonth() + 1}/${date1.getDate()}`
        return <span>{time}</span>
    }
}

export default Clock