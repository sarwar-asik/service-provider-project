import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";

const Blogs = () => {
  return (
    <div className="container my-5 ">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between <b>SQL</b> and <b>NoSQL</b> ?
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                {" "}
                <code>THE SQL DATA </code> structure is based on a relational
                model that normalizes data <br></br> But{" "}
                <code>The NoSQL Data </code> structure does not require a
                normalized configuration{" "}
              </li>
              <li>
                <code>THE SQL DATA </code> are all about the SQL language.{" "}
                <br /> <code>The NoSQL Data </code> are not locked into one
                language.{" "}
              </li>
              <li>
                <code>THE SQL DATA </code> deliver a high degree of data
                integrity, adhering to the principles of atomicity, But Data
                integrity can be difficult for <code>The NoSQL Data </code>{" "}
              </li>
              <li>
                {" "}
                <code>THE SQL DATA </code> are efficient at processing queries
                and joining data across tables. But <code>The NoSQL Data </code>{" "}
                lack consistency across products and typically require more work
                to query data, particular as query complexity increases.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is <b>JWT</b>, and how does it work?
          </Accordion.Header>
          <Accordion.Body>
            {" "}
            <b>JWT </b> JSON Web Token, is an open standard used to share
            security information between two parties — a client and a server.
            Each JWT contains encoded JSON objects, including a set of claims.{" "}
            <br />A claim may assert who issued the token, how long it is valid
            for, or what permissions the client has been granted.{" "}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the difference between <b> Javascript </b> and <b>NodeJS</b>{" "}
            ?
          </Accordion.Header>
          <Accordion.Body>
            <Table striped="columns">
              <thead>
                <tr>
                  <th>
                    <b>JAVASCRIPT</b>
                  </th>
                  <th>NODE JS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    JavaScript is a lightweight, <br /> object-oriented
                    scripting language <br /> that is used to build dynamic HTML
                    pages <br /> with interactive effects on a webpage.
                  </td>
                  <td>
                    Node.js usually represents a list of <br /> objects and
                    methods accessible <br /> to JavaScript code when run in the
                    V8 engine or via the node interpreter.
                  </td>
                </tr>
                <tr>
                  <td>
                    Brendan Eich of Netscape created it, and it was first
                    published in 1995.
                  </td>
                  <td>
                    Node.js was developed and introduced by Ryan Dahl in 2009.{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How does <b> NODE JS </b> handle multiple requests at the same time
            ?
          </Accordion.Header>
          <Accordion.Body>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue.{" "}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
