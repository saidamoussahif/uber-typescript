

const Dashboard: React.FC = () => {
  return (
	<>
		<div className="p-8 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container flex justify-center items-center">
			<div className="flex justify-between items-center w-full">
				<div className="flex flex-col justify-start items-start">
					<a
						href="/"
						className="flex items-center p-2 text-3xl font-normal text-[#15449c] rounded-lg"
					>
						<span className="text-blue-900 ml-3 font-bold font-[Poppin]">
							Admin panel
						</span>
					</a>
				</div>
				<ul className="pt-4 mt-4 space-y-2 dark:border-blue-700">
					<li>
						<button
							type="button"
							className="flex items-center p-2 text-xl font-normal text-blue-900 rounded-lg transition duration-75 hover:bg-blue-300"
						>
							{/* <span className="text-blue-900 ml-3 font-bold font-[Poppin]">
							Admin panel
						</span> */}
						</button>
					</li>
				</ul>
			</div>
		</div>
	</>
	  );
	};

	export default Dashboard;