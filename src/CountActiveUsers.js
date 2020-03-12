import React, { useMemo } from 'react';

function CountActiveUsers({ users }) {
    const count = useMemo(
        () => users.filter(user => user.active).length, [users]
    );
    
    return(
        <div>활성 사용자 수 : {count}</div>
    );
}

export default CountActiveUsers;