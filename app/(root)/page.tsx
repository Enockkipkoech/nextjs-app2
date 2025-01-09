import Hello from '@/app//components/hello';

export default function Home() {
	console.log('Hello from the server side!');
	return (
		<>
			<h1 className="text-3xl">Hello 🤝 Next Nerd 🔥 NODEG 🔥 </h1>;
			<Hello />
		</>
	);
}
