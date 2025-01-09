import React from 'react';
const page = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	return <h1 className="text-3xl">User Details Page: {id} </h1>;
};

export default page;
