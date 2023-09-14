<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Books</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
    <!-- Add custom dark styles -->
    <style>
        .dark-form input, .dark-form button {
            background-color: #333;
            color: #FFF;
            border-color: #444;
        }
        .dark-form input:focus, .dark-form button:focus {
            box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
        }
    </style>
</head>
<body class="bg-dark text-white">
	<h1>Book Club</h1>
	<p>A place for friends to share thoughts on books</p>
   <div class="container">
       <h2>Registration</h2>
       <form:form action="/register" method="post" modelAttribute="newUser" class="dark-form">
	       	<form:label path="userName">Username:</form:label>      		       		       	
	   		<form:input path="userName"></form:input>
	       	<br />
	   		<form:errors path="userName"></form:errors>
	   		<br />
	   		<form:label path="email">Email:</form:label>
	   		<form:input path="email"></form:input>
	       	<br />
	   		<form:errors path="email"></form:errors>
	   		<br />
	   		<form:label path="password">Password:</form:label>
	   		<form:input path="password"></form:input>
	       	<br />
	   		<form:errors path="password"></form:errors>
	   		<br />
	   		<form:label path="confirm">Confirm Password:</form:label>
	   		<form:input path="confirm"></form:input>
	       	<br />
	   		<form:errors path="confirm"></form:errors>
	       	<br />
           <input type="submit" value="Register" class="btn btn-secondary"></input>
       </form:form>
   
       <h2>Login</h2>
       <form:form action="/login" method="post" modelAttribute="newLogin" class="dark-form">
			<form:label path="email">Email:</form:label>
			<form:input path="email"></form:input>
	       	<br />
			<form:errors path="email"></form:errors>		
	       	<br />
			<form:label path="password">Password:</form:label>
			<form:input path="password"></form:input>
	       	<br />
			<form:errors path="password"></form:errors>
	       	<br />
           <input type="submit" value="Login" class="btn btn-secondary"></input>
       </form:form>
   </div>
</body>
</html>