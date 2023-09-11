<%@ page isErrorPage="true" %>    
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<h1>Add a Burger</h1>
<form:form action="/burgers/${id}" method="put" modelAttribute="burger">
    <div>
        <form:label path="burgerName">Burger Name</form:label>
        <form:input path="burgerName"/>
        <form:errors path="burgerName"/>
    </div>
    <div>
        <form:label path="restaurantName">Restaurant Name</form:label>
        <form:textarea path="restaurantName"/>
        <form:errors path="restaurantName"/>
    </div>
    <div>
        <form:label path="rating">Rating</form:label>
        <form:input type="number" path="rating"/>
        <form:errors path="rating"/>
        
    </div>
    <div>
        <form:label path="notes">Notes</form:label>
        <form:input path="notes"/>
        <form:errors path="notes"/>
    </div>
    <input type="submit" value="Submit"/>
</form:form>