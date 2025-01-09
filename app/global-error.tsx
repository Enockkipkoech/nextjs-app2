// app/global-error.tsx
'use client'; // Error boudaries must be client-side Components

import React from 'react';

const GlobalEror = ({ error }: { error: Error & { digest?: string } }) => {
	return (
		<html lang="en">
			<body>
				<h2>Global Error: {error.message}</h2>
			</body>
		</html>
	);
};

export default GlobalEror;
