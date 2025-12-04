


export async  function middleware(request) {    
    const token = request.cookies.get("token")?.value;
    const user= token ? await verifyToken(token) : null;
    if(!user){
        return NextResponse.redirect(new URL('/loginpage',request.url));        
    }
    return NextResponse.next();





}




export const config = {
    matcher: ['/headPhoneProducts/:path*'],
};