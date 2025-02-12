

function AppRoutes(props) {
    
    return (
        <Routes>
    
            <Route index element={<HomePage />} />
   
            <Route path="./pages/AboutUs.jsx" element={<AboutUs />} />
    
            <Route path='./pages/AllBooks.jsx' element={<AllBooks />} /> 
   
            <Route path="*" element={<PageNotFound />} /> 

            

        </Routes>
    )
}
export default AppRoutes;