class About {
    api() {
        return fetch("http://localhost:8080/about")
            .then((response) => {
                return response.json();
            })
    }
}

export default About;