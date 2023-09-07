<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Hopper Receipt</title>
    </head>
<body>
    <h1>Customer name: ${receipt.name}</h1>
    <p>Item name: ${receipt.itemName}</p>
    <p>Price: $${receipt.price}</p>
    <p>Description: ${receipt.description}</p>
    <p>Vendor: ${receipt.vendor}</p>
</body>
</html>
