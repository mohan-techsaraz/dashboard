import React from 'react'
import logoP from "../images/people.png"
import logoR from "../images/img2.jpg"
import logoE from "../images/img3.jpg"
import logoV from "../images/img4.jpg"

export default function Main() {
  return (
    <>
          <section id="content" className="bg-slate-300">
		{/* <!-- MAIN --> */}
		<main>
			<div className="head-title">
				<div className="left">
					<h1>Dashboard</h1>
					<ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Home</a>
						</li>
					</ul>
				</div>
				<a href="#" className="btn-download">
					<i className='bx bxs-cloud-download' ></i>
					<span className="text">Download</span>
				</a>
			</div>

			<ul className="box-info">
				<li>
					<i className='bx bxs-calendar-check' ></i>
					<span className="text">
						<h3>1020</h3>
						<p>New Order</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-group' ></i>
					<span className="text">
						<h3>2834</h3>
						<p>Visitors</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-dollar-circle' ></i>
					<span className="text">
						<h3>$2543</h3>
						<p>Total Sales</p>
					</span>
				</li>
			</ul>


			<div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Recent Orders</h3>
						<i className='bx bx-search' ></i>
						<i className='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th className="text-yellow-600">User</th>
								<th className="text-yellow-600">Date Order</th>
								<th className="text-yellow-600">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src={logoP}/>
									<p className="text-white">John Doe</p>
								</td>
								<td className="text-white">01-10-2021</td>
								<td><span className="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src={logoR}/>
									<p className="text-white">Ruben Tillman</p>
								</td>
								<td className="text-white">01-10-2021</td>
								<td><span className="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src={logoE}/>
									<p className="text-white">Elliot Huber</p>
								</td>
								<td className="text-white">01-10-2021</td>
								<td><span className="status process">Process</span></td>
							</tr>
							<tr>
								<td>
									<img src={logoV}/>
									<p className="text-white">Vinnie Wagstaff</p>
								</td>
								<td className="text-white">01-10-2021</td>
								<td><span className="status Completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src={logoP}/>
									<p className="text-white">Ella-Rose Henry</p>
								</td>
								<td className="text-white">01-10-2021</td>
								<td><span className="status Pending">Pending</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="todo">
					<div className="head">
						<h3>Todos</h3>
						<i className='bx bx-plus' ></i>
						<i className='bx bx-filter' ></i>
					</div>
					<ul className="todo-list">
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="not-completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="not-completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
					</ul>
				</div>
			</div>
		</main>
		{/* <!-- MAIN --> */}
	</section>
    </>
  )
}
