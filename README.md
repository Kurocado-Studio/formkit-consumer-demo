# FormKit — Consumer Renderer

## What is FormKit?

FormKit is a framework for designing, managing, and rendering dynamic forms. It separates form
creation from form consumption, allowing teams to define structured form schemas using the Builder
and render them using the Consumer runtime. The goal is to standardize how forms are produced across
projects while enabling consistency, reusability, and rapid iteration.

FormKit provides:

- A schema-based approach for defining form structure and behavior
- A visual builder for authoring and maintaining those schemas
- A React runtime that renders forms based on the generated schema
- A clean separation between product-facing configuration and developer-facing implementation

FormKit evolved from the earlier codename “HTML Forms Factory,” which served as its initial
architectural prototype.

This repository contains the form rendering runtime, which consumes JSON form definitions produced
by the Builder. It includes the components, validation logic, and runtime behavior for rendering
forms within React applications.

### Overview

- Purpose: Render forms generated via the Builder
- Input: JSON schema definitions
- Usage: Internal demos, prototyping, and integration testing

### Documentation

- Project Overview: https://kurocado-studio.github.io/html-forms-service/landing.html

### Related Repositories

- Builder Tool: https://github.com/Kurocado-Studio/form-management-ui
