import Link from "next/link";
import { BsMouse } from "react-icons/bs";
import { BsRocketTakeoff } from "react-icons/bs";
import CategoryOne from "./components/categories/category-one";
import PopularListingOne from "./components/popular-listing-one";
import Footer from "./components/footer/footer";
import BackToTop from "./components/back-to-top";
import NavbarServerWrapper from '@/app/components/navbar/navabar-server'
import { generateSEOMetadata } from '../../lib/useSeo';
import FormTwo from "./components/form/form-two";
import ExploreCity from "./components/explore-city";
import HowItsWork from "./components/how-its-work";
import WorkingProcessTwo from "./components/working-process-two";
import { ListingContext } from "./lib/data";
import { Metadata } from "next";

export default function Home() {
    return (
        <>
            <NavbarServerWrapper />

            <div className="image-cover hero-header position-relative" style={{ backgroundImage: `url('/img/banner/kuwait.webp')` }} data-overlay="6">
                <div className="container">
                    <div className="row justify-content-center align-items-center mb-5 pt-lg-0 pt-5">
                        <div className="col-xl-8 col-lg-9 col-md-10 col-sm-12 mx-auto">
                            <div className="position-relative text-center">
                                <h1 className="display-4 fw-bold">Discover Trusted Business Listings In Kuwait</h1>
                                <p className="fs-5 fw-light">
                                    Your comprehensive guide to finding contacts, locations, and services from trusted businesses across the nation.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <FormTwo /> */}
                </div>
                <div className="mousedrop z-1"><Link href="#mains" className="mousewheel"><BsMouse /></Link></div>
            </div>

            {/* Coming Soon Section */}
            <section className="py-5" id="mains">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10 col-sm-12">
                            <div className="text-center py-5">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        backgroundColor: 'var(--bs-primary-bg-subtle)',
                                        color: 'var(--bs-primary)'
                                    }}
                                >
                                    <BsRocketTakeoff size={48} />
                                </div>
                                <h2 className="display-5 fw-bold mb-3">Business Listings Coming Soon!</h2>
                                <p className="fs-5 text-muted mb-4">
                                    We're currently building Kuwait's most comprehensive business directory. 
                                    Stay tuned as we add verified businesses across all governorates.
                                </p>
                                <div className="d-flex flex-wrap gap-3 justify-content-center">
                                    <Link href="/add-listing" className="btn btn-primary btn-lg rounded-pill px-5">
                                        Register Your Business
                                    </Link>
                                    <Link href="/about" className="btn btn-outline-primary btn-lg rounded-pill px-5">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview Categories */}
                    <div className="row justify-content-center mt-5">
                        <div className="col-xl-10 col-lg-11 col-md-12">
                            <div className="text-center mb-4">
                                <h3 className="fw-semibold">Categories We'll Feature</h3>
                                <p className="text-muted">Businesses across all major industries in Kuwait</p>
                            </div>
                            <div className="row g-4">
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Real Estate</h5>
                                        <p className="text-muted small mb-0">Properties, rentals & developers</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Manufacturing</h5>
                                        <p className="text-muted small mb-0">Suppliers & manufacturers</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Shops & Suppliers</h5>
                                        <p className="text-muted small mb-0">Retail & wholesale</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Services</h5>
                                        <p className="text-muted small mb-0">Professional services</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Technology</h5>
                                        <p className="text-muted small mb-0">IT & communications</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">And More...</h5>
                                        <p className="text-muted small mb-0">Growing daily</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commented out sections for when you have listings */}
            {/* <section className="pb-0" id="mains">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                            <div className="secHeading-wrap text-center mb-5">
                                <h2 className="sectionHeading">Search Listings By Category</h2>
                                <p>From neighborhood entrepreneurs to international suppliers, Kuwait Bizz Directory connects you with businesses that serve, support, and trade with Kuwait.</p>
                            </div>
                        </div>
                    </div>
                    <CategoryOne />
                </div>
            </section> */}

            {/* <section>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                            <div className="secHeading-wrap text-center">
                                <h3 className="sectionHeading">Trending & Popular <span className="text-primary">Listings</span></h3>
                                <p>Explore Hot & Popular Business Listings</p>
                            </div>
                        </div>
                    </div>
                    <PopularListingOne context={ListingContext.LOCAL} />
                </div>
            </section> */}

            {/* <section className="bg-light">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                            <div className="secHeading-wrap text-center">
                                <h2 className="sectionHeading">Explore Top Business Hubs in Kuwait</h2>
                                <p>From Kuwait City's vibrant markets to Salmiya's coastal commerce — discover local businesses across Kuwait's most active areas.</p>
                            </div>
                        </div>
                    </div>
                    <ExploreCity />
                </div>
            </section> */}

            <section className="light-top-gredient">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                            <div className="secHeading-wrap text-center">
                                <h3 className="sectionHeading">See How It  <span className="text-primary">Works</span></h3>
                                <p>Connecting with trusted businesses across Kuwait has never been this easy. Whether you're searching for local services or want to list your own business, it's simple in just a few steps.</p>
                            </div>
                        </div>
                    </div>
                    <HowItsWork />
                </div>
            </section>
            
            <WorkingProcessTwo />

            <Footer />
            <BackToTop />
        </>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    return generateSEOMetadata('/')
}