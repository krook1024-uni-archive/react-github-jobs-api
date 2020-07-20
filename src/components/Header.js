import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <Jumbotron fluid className="bg-primary text-white">
                <Container>
                    <h1 className="my-3">GitHub Jobs</h1>
                    <p className="my-3">
                        Use this simple website to find jobs posted on{' '}
                        <u>
                            <a
                                href="https://jobs.github.com/"
                                className="text-white"
                            >
                                GitHub
                            </a>
                        </u>
                        .<br />
                        This website was created using the{' '}
                        <u>
                            <a
                                href="https://jobs.github.com/api"
                                className="text-white"
                            >
                                GitHub Jobs API
                            </a>
                        </u>
                        .
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
}
