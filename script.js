t=0,setup=_=>{createCanvas(w=800,w),noiseSeed(fxrand()*999999)},draw=_=>{for(noStroke(),background(0),fill(w),translate(w/2,w/2),rotate(-t*40),scale(s=5),a=0;7>a;a+=4e-4)x=noise(1e3*a),y=15*(a/w*2/cos(x+t)),e=noise(x*y)*w/10,circle(cos(20+e*a)*e,sin(20+e*a)*e,.35);t+=s/30000}//#つぶやきProcessing