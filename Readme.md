# steps to setup
Ensure both servers are running simultaneously to use the /paydart endpoint on Server 2.
Server 2 relies on Server 1 being active to fetch data from it.

# clone the repo
git clone https://github.com/R4vitej4/s2s.git


you can see two server folders 

# step1: 

cd server1 && npm install && node index.js
server1 runs at port 4000

# step 2:

cd server2 && npm install && node app.js
server2 runs at port 4001

# flow :
create .env file in server1 folder and add this info

API_URL=https://nodeserver.paydart.co/api/v1/open/orders/create
merchant_key=
merchant_secret=

server1 has an endpoint "http://localhost:4000/api/v1/create" which gives the response from paydart server.

server2 has endpoint http://localhost:4001/paydart_transaction it returns the payment_link (i.e it sends a request to server1 to get the response and only picks payment_link)

open index.html in browser it redirects to new tab for proceeding the transaction
