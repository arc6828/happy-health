import MetaTags from "@/Components/MetaTags";
import MyLayout from "@/Layouts/MyLayout";
import { usePage } from "@inertiajs/react";

export default function Index() {
    const page = usePage();

    return (
        <MyLayout>
            <MetaTags
                title="โครงการ Happy Health Happy Heart"
                description="ร่วมแข่งขันลดน้ำหนักกับ Happy Health, Happy Heart แพลตฟอร์มที่ช่วยให้คุณควบคุมน้ำหนักได้อย่างมีประสิทธิภาพ ด้วยคำแนะนำจาก AI โปรแกรมโภชนาการ และชุมชนที่สนับสนุนคุณในการมีสุขภาพที่ดีและหัวใจที่แข็งแรง!"
                keywords="ลดน้ำหนัก, การแข่งขันลดน้ำหนัก, ควบคุมน้ำหนัก, สุขภาพดี, สุขภาพและความสุข, โภชนาการ, ฟิตเนส, วิธีลดน้ำหนัก, ลดน้ำหนักอย่างปลอดภัย, ออกกำลังกายลดน้ำหนัก, เมนูอาหารสุขภาพ, คำนวณแคลอรี่, โปรแกรมลดน้ำหนักออนไลน์, แอปช่วยลดน้ำหนัก, ลดน้ำหนักด้วย AI, โปรแกรมสุขภาพที่ดีที่สุด"
                author="คณะวิทยาศาสตร์และเทคโนโลยี x คณะสาธารณสุขศาสตร์ มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์"
                imageUrl="https://picsum.photos/1600/900"
                url={route("home")}
            />

            {/* Mashead header*/}
            <header className="masthead">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            {/* Mashead text and app badges*/}
                            <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                <h1 className="display-1 lh-1 mb-3">
                                    Showcase your app beautifully.
                                </h1>
                                <p className="lead fw-normal text-muted mb-5">
                                    Launch your mobile app landing page faster
                                    with this free, open source theme from Start
                                    Bootstrap!
                                </p>
                                <div className="d-flex flex-column flex-lg-row align-items-center">
                                    <a
                                        className="me-lg-3 mb-4 mb-lg-0"
                                        href="#!"
                                    >
                                        <img
                                            className="app-badge"
                                            src="assets/img/google-play-badge.svg"
                                            alt="..."
                                        />
                                    </a>
                                    <a href="#!">
                                        <img
                                            className="app-badge"
                                            src="assets/img/app-store-badge.svg"
                                            alt="..."
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* Masthead device mockup feature*/}
                            <div className="masthead-device-mockup">
                                <svg
                                    className="circle"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient
                                            id="circleGradient"
                                            gradientTransform="rotate(45)"
                                        >
                                            <stop
                                                className="gradient-start-color"
                                                offset="0%"
                                            />
                                            <stop
                                                className="gradient-end-color"
                                                offset="100%"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <circle cx={50} cy={50} r={50} />
                                </svg>
                                <svg
                                    className="shape-1 d-none d-sm-block"
                                    viewBox="0 0 240.83 240.83"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="-32.54"
                                        y="78.39"
                                        width="305.92"
                                        height="84.05"
                                        rx="42.03"
                                        transform="translate(120.42 -49.88) rotate(45)"
                                    />
                                    <rect
                                        x="-32.54"
                                        y="78.39"
                                        width="305.92"
                                        height="84.05"
                                        rx="42.03"
                                        transform="translate(-49.88 120.42) rotate(-45)"
                                    />
                                </svg>
                                <svg
                                    className="shape-2 d-none d-sm-block"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={50} cy={50} r={50} />
                                </svg>
                                <div className="device-wrapper">
                                    <div
                                        className="device"
                                        data-device="iPhoneX"
                                        data-orientation="portrait"
                                        data-color="black"
                                    >
                                        <div className="screen bg-black">
                                            {/* PUT CONTENTS HERE:*/}
                                            {/* * * This can be a video, image, or just about anything else.*/}
                                            {/* * * Set the max width of your media to 100% and the height to*/}
                                            {/* * * 100% like the demo example below.*/}
                                            <video
                                                muted="muted"
                                                autoPlay
                                                loop
                                                style={{
                                                    maxWidth: "100%",
                                                    height: "100%",
                                                }}
                                            >
                                                <source
                                                    src="assets/img/demo-screen.mp4"
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Quote/testimonial aside*/}
            <aside className="text-center bg-gradient-primary-to-secondary">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xl-8">
                            <div className="h2 fs-1 text-white mb-4">
                                "An intuitive solution to a common problem that
                                we all face, wrapped up in a single app!"
                            </div>
                            <img
                                src="assets/img/tnw-logo.svg"
                                alt="..."
                                style={{ height: "3rem" }}
                            />
                        </div>
                    </div>
                </div>
            </aside>
            {/* App features section*/}
            <section id="features">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                            <div className="container-fluid px-5">
                                <div className="row gx-5">
                                    <div className="col-md-6 mb-5">
                                        {/* Feature item*/}
                                        <div className="text-center">
                                            <i className="bi-phone icon-feature text-gradient d-block mb-3" />
                                            <h3 className="font-alt">
                                                Device Mockups
                                            </h3>
                                            <p className="text-muted mb-0">
                                                Ready to use HTML/CSS device
                                                mockups, no Photoshop required!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        {/* Feature item*/}
                                        <div className="text-center">
                                            <i className="bi-camera icon-feature text-gradient d-block mb-3" />
                                            <h3 className="font-alt">
                                                Flexible Use
                                            </h3>
                                            <p className="text-muted mb-0">
                                                Put an image, video, animation,
                                                or anything else in the screen!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-5 mb-md-0">
                                        {/* Feature item*/}
                                        <div className="text-center">
                                            <i className="bi-gift icon-feature text-gradient d-block mb-3" />
                                            <h3 className="font-alt">
                                                Free to Use
                                            </h3>
                                            <p className="text-muted mb-0">
                                                As always, this theme is free to
                                                download and use for any
                                                purpose!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        {/* Feature item*/}
                                        <div className="text-center">
                                            <i className="bi-patch-check icon-feature text-gradient d-block mb-3" />
                                            <h3 className="font-alt">
                                                Open Source
                                            </h3>
                                            <p className="text-muted mb-0">
                                                Since this theme is MIT
                                                licensed, you can use it
                                                commercially!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-0">
                            {/* Features section device mockup*/}
                            <div className="features-device-mockup">
                                <svg
                                    className="circle"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient
                                            id="circleGradient"
                                            gradientTransform="rotate(45)"
                                        >
                                            <stop
                                                className="gradient-start-color"
                                                offset="0%"
                                            />
                                            <stop
                                                className="gradient-end-color"
                                                offset="100%"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <circle cx={50} cy={50} r={50} />
                                </svg>
                                <svg
                                    className="shape-1 d-none d-sm-block"
                                    viewBox="0 0 240.83 240.83"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="-32.54"
                                        y="78.39"
                                        width="305.92"
                                        height="84.05"
                                        rx="42.03"
                                        transform="translate(120.42 -49.88) rotate(45)"
                                    />
                                    <rect
                                        x="-32.54"
                                        y="78.39"
                                        width="305.92"
                                        height="84.05"
                                        rx="42.03"
                                        transform="translate(-49.88 120.42) rotate(-45)"
                                    />
                                </svg>
                                <svg
                                    className="shape-2 d-none d-sm-block"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={50} cy={50} r={50} />
                                </svg>
                                <div className="device-wrapper">
                                    <div
                                        className="device"
                                        data-device="iPhoneX"
                                        data-orientation="portrait"
                                        data-color="black"
                                    >
                                        <div className="screen bg-black">
                                            {/* PUT CONTENTS HERE:*/}
                                            {/* * * This can be a video, image, or just about anything else.*/}
                                            {/* * * Set the max width of your media to 100% and the height to*/}
                                            {/* * * 100% like the demo example below.*/}
                                            <video
                                                muted="muted"
                                                autoPlay
                                                loop
                                                style={{
                                                    maxWidth: "100%",
                                                    height: "100%",
                                                }}
                                            >
                                                <source
                                                    src="assets/img/demo-screen.mp4"
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Basic features section*/}
            <section className="bg-light">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-12 col-lg-5">
                            <h2 className="display-4 lh-1 mb-4">
                                Enter a new age of web design
                            </h2>
                            <p className="lead fw-normal text-muted mb-5 mb-lg-0">
                                This section is perfect for featuring some
                                information about your application, why it was
                                built, the problem it solves, or anything else!
                                There's plenty of space for text here, so don't
                                worry about writing too much.
                            </p>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <div className="px-5 px-sm-0">
                                <img
                                    className="img-fluid rounded-circle"
                                    src="https://source.unsplash.com/u8Jn2rzYIps/900x900"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to action section*/}
            <section className="cta">
                <div className="cta-content">
                    <div className="container px-5">
                        <h2 className="text-white display-1 lh-1 mb-4">
                            Stop waiting.
                            <br />
                            Start building.
                        </h2>
                        <a
                            className="btn btn-outline-light py-3 px-4 rounded-pill"
                            href="https://startbootstrap.com/theme/new-age"
                            target="_blank"
                        >
                            Download for free
                        </a>
                    </div>
                </div>
            </section>
            {/* App badge section*/}
            <section className="bg-gradient-primary-to-secondary" id="download">
                <div className="container px-5">
                    <h2 className="text-center text-white font-alt mb-4">
                        Get the app now!
                    </h2>
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                        <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                            <img
                                className="app-badge"
                                src="assets/img/google-play-badge.svg"
                                alt="..."
                            />
                        </a>
                        <a href="#!">
                            <img
                                className="app-badge"
                                src="assets/img/app-store-badge.svg"
                                alt="..."
                            />
                        </a>
                    </div>
                </div>
            </section>
            {/* Feedback Modal*/}
            <div
                className="modal fade"
                id="feedbackModal"
                tabIndex={-1}
                aria-labelledby="feedbackModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-gradient-primary-to-secondary p-4">
                            <h5
                                className="modal-title font-alt text-white"
                                id="feedbackModalLabel"
                            >
                                Send feedback
                            </h5>
                            <button
                                className="btn-close btn-close-white"
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body border-0 p-4">
                            {/* * * * * * * * * * * * * * * **/}
                            {/* * * SB Forms Contact Form * **/}
                            {/* * * * * * * * * * * * * * * **/}
                            {/* This form is pre-integrated with SB Forms.*/}
                            {/* To make this form functional, sign up at*/}
                            {/* https://startbootstrap.com/solution/contact-forms*/}
                            {/* to get an API token!*/}
                            <form
                                id="contactForm"
                                data-sb-form-api-token="API_TOKEN"
                            >
                                {/* Name input*/}
                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control"
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name..."
                                        data-sb-validations="required"
                                    />
                                    <label htmlFor="name">Full name</label>
                                    <div
                                        className="invalid-feedback"
                                        data-sb-feedback="name:required"
                                    >
                                        A name is required.
                                    </div>
                                </div>
                                {/* Email address input*/}
                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control"
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        data-sb-validations="required,email"
                                    />
                                    <label htmlFor="email">Email address</label>
                                    <div
                                        className="invalid-feedback"
                                        data-sb-feedback="email:required"
                                    >
                                        An email is required.
                                    </div>
                                    <div
                                        className="invalid-feedback"
                                        data-sb-feedback="email:email"
                                    >
                                        Email is not valid.
                                    </div>
                                </div>
                                {/* Phone number input*/}
                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control"
                                        id="phone"
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                        data-sb-validations="required"
                                    />
                                    <label htmlFor="phone">Phone number</label>
                                    <div
                                        className="invalid-feedback"
                                        data-sb-feedback="phone:required"
                                    >
                                        A phone number is required.
                                    </div>
                                </div>
                                {/* Message input*/}
                                <div className="form-floating mb-3">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        type="text"
                                        placeholder="Enter your message here..."
                                        style={{ height: "10rem" }}
                                        data-sb-validations="required"
                                        defaultValue={""}
                                    />
                                    <label htmlFor="message">Message</label>
                                    <div
                                        className="invalid-feedback"
                                        data-sb-feedback="message:required"
                                    >
                                        A message is required.
                                    </div>
                                </div>
                                {/* Submit success message*/}
                                {/**/}
                                {/* This is what your users will see when the form*/}
                                {/* has successfully submitted*/}
                                <div
                                    className="d-none"
                                    id="submitSuccessMessage"
                                >
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">
                                            Form submission successful!
                                        </div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">
                                            https://startbootstrap.com/solution/contact-forms
                                        </a>
                                    </div>
                                </div>
                                {/* Submit error message*/}
                                {/**/}
                                {/* This is what your users will see when there is*/}
                                {/* an error submitting the form*/}
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">
                                        Error sending message!
                                    </div>
                                </div>
                                {/* Submit Button*/}
                                <div className="d-grid">
                                    <button
                                        className="btn btn-primary rounded-pill btn-lg disabled"
                                        id="submitButton"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </MyLayout>
    );
}
