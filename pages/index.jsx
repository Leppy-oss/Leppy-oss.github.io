import { Container, Divider, Group, Text } from '@mantine/core';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import classes from '../styles/home.module.css';
import GradientText from '../components/GradientText';
import { DEFAULT_THEME as theme } from '@mantine/core';

export default function Home() {
    useGSAP(() => {
        gsap.timeline({
            snap: {
                snapTo: 'labels',
                duration: { min: 0.5, max: 3 },
                delay: 0.2,
                ease: 'power1.inOut'
            }
        })
            .from('.name-text-1', { x: -1000, delay: 0.5 }, 0)
            .from('.name-text-2', { x: -1000, delay: 1 }, 0)
            .to('.o-leppy', { rotationX: 360, duration: 0.5, repeat: -1, repeatDelay: gsap.utils.random(2.5, 5), delay: 0.5 })
            .eventCallback('onComplete', () => {
            });
    });

    return (
        <Container className='container'>
            <Container>
                <GradientText className={classes.nt} from={theme.colors.blue[6]} to={theme.colors.pink[6]}>text<span className='o-leppy' style={{display: 'inline-block',
                        zIndex: 1,
                }}>the final test</span></GradientText>
                <p>a<span className={`${classes.nt} ${classes.gradText} o-leppy`} style={{display: 'inline-block',
                        WebkitTextFillColor: 'transparent',
                }}>bb</span>c</p>
                <Text className='nt name-text-1'>Hi, my name is </Text>
                <Text className='nt name-text-2' variant='gradient' gradient={{ from: 'blue', to: 'pink' }}>
                    Leppy-<Text span display='inline-flex' className='o-leppy'>o</Text>ss</Text>
            </Container>
            <div>
                This is the homepage.
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium fusce id velit ut tortor. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eget est lorem ipsum dolor sit. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. At imperdiet dui accumsan sit amet nulla. Scelerisque in dictum non consectetur. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Tellus elementum sagittis vitae et leo duis ut. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam.

                    Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Mauris pharetra et ultrices neque ornare aenean. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Et tortor consequat id porta. Adipiscing tristique risus nec feugiat in fermentum. Sagittis id consectetur purus ut faucibus pulvinar. Ultrices vitae auctor eu augue ut lectus. Ut porttitor leo a diam sollicitudin. Habitasse platea dictumst quisque sagittis purus. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Dolor purus non enim praesent elementum. Massa id neque aliquam vestibulum morbi blandit cursus risus. Neque volutpat ac tincidunt vitae semper quis lectus. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pharetra sit amet aliquam id diam maecenas.

                    Id interdum velit laoreet id. Nam at lectus urna duis convallis convallis tellus. Tristique risus nec feugiat in. Euismod lacinia at quis risus sed vulputate odio ut. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Ut ornare lectus sit amet est placerat in egestas. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Ipsum dolor sit amet consectetur. Natoque penatibus et magnis dis. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Tellus mauris a diam maecenas sed. Amet consectetur adipiscing elit ut aliquam purus. Duis at consectetur lorem donec massa. Odio eu feugiat pretium nibh ipsum consequat. Aliquet bibendum enim facilisis gravida neque convallis a cras. Ipsum dolor sit amet consectetur. Purus in mollis nunc sed id semper risus in hendrerit. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Accumsan in nisl nisi scelerisque eu ultrices.

                    Ac odio tempor orci dapibus ultrices in iaculis nunc. Ac auctor augue mauris augue neque gravida in fermentum et. Et sollicitudin ac orci phasellus egestas tellus. Quis lectus nulla at volutpat diam ut venenatis. Quam adipiscing vitae proin sagittis nisl. Adipiscing at in tellus integer. Nisi est sit amet facilisis magna. A pellentesque sit amet porttitor eget dolor morbi non arcu. Lobortis scelerisque fermentum dui faucibus in ornare. A diam maecenas sed enim ut sem viverra aliquet eget.

                    Augue lacus viverra vitae congue eu consequat ac. Dui nunc mattis enim ut tellus elementum. Lacus sed viverra tellus in hac. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nec tincidunt praesent semper feugiat nibh sed. Sed turpis tincidunt id aliquet risus feugiat in. Aliquet eget sit amet tellus cras adipiscing enim. Diam maecenas sed enim ut sem viverra. Metus dictum at tempor commodo. Faucibus purus in massa tempor nec. Amet tellus cras adipiscing enim eu turpis. Dapibus ultrices in iaculis nunc sed. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra.
                </div>
                <Divider color='red' my='md' size='xl' />
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium fusce id velit ut tortor. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eget est lorem ipsum dolor sit. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. At imperdiet dui accumsan sit amet nulla. Scelerisque in dictum non consectetur. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Tellus elementum sagittis vitae et leo duis ut. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam.

                    Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Mauris pharetra et ultrices neque ornare aenean. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Et tortor consequat id porta. Adipiscing tristique risus nec feugiat in fermentum. Sagittis id consectetur purus ut faucibus pulvinar. Ultrices vitae auctor eu augue ut lectus. Ut porttitor leo a diam sollicitudin. Habitasse platea dictumst quisque sagittis purus. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Dolor purus non enim praesent elementum. Massa id neque aliquam vestibulum morbi blandit cursus risus. Neque volutpat ac tincidunt vitae semper quis lectus. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pharetra sit amet aliquam id diam maecenas.

                    Id interdum velit laoreet id. Nam at lectus urna duis convallis convallis tellus. Tristique risus nec feugiat in. Euismod lacinia at quis risus sed vulputate odio ut. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Ut ornare lectus sit amet est placerat in egestas. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Ipsum dolor sit amet consectetur. Natoque penatibus et magnis dis. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Tellus mauris a diam maecenas sed. Amet consectetur adipiscing elit ut aliquam purus. Duis at consectetur lorem donec massa. Odio eu feugiat pretium nibh ipsum consequat. Aliquet bibendum enim facilisis gravida neque convallis a cras. Ipsum dolor sit amet consectetur. Purus in mollis nunc sed id semper risus in hendrerit. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Accumsan in nisl nisi scelerisque eu ultrices.

                    Ac odio tempor orci dapibus ultrices in iaculis nunc. Ac auctor augue mauris augue neque gravida in fermentum et. Et sollicitudin ac orci phasellus egestas tellus. Quis lectus nulla at volutpat diam ut venenatis. Quam adipiscing vitae proin sagittis nisl. Adipiscing at in tellus integer. Nisi est sit amet facilisis magna. A pellentesque sit amet porttitor eget dolor morbi non arcu. Lobortis scelerisque fermentum dui faucibus in ornare. A diam maecenas sed enim ut sem viverra aliquet eget.

                    Augue lacus viverra vitae congue eu consequat ac. Dui nunc mattis enim ut tellus elementum. Lacus sed viverra tellus in hac. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nec tincidunt praesent semper feugiat nibh sed. Sed turpis tincidunt id aliquet risus feugiat in. Aliquet eget sit amet tellus cras adipiscing enim. Diam maecenas sed enim ut sem viverra. Metus dictum at tempor commodo. Faucibus purus in massa tempor nec. Amet tellus cras adipiscing enim eu turpis. Dapibus ultrices in iaculis nunc sed. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra.
                </div>
                <Divider color='red' my='md' size='xl' />
                <div data-aos='fade-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium fusce id velit ut tortor. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eget est lorem ipsum dolor sit. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. At imperdiet dui accumsan sit amet nulla. Scelerisque in dictum non consectetur. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Tellus elementum sagittis vitae et leo duis ut. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam.

                    Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Mauris pharetra et ultrices neque ornare aenean. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Et tortor consequat id porta. Adipiscing tristique risus nec feugiat in fermentum. Sagittis id consectetur purus ut faucibus pulvinar. Ultrices vitae auctor eu augue ut lectus. Ut porttitor leo a diam sollicitudin. Habitasse platea dictumst quisque sagittis purus. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Dolor purus non enim praesent elementum. Massa id neque aliquam vestibulum morbi blandit cursus risus. Neque volutpat ac tincidunt vitae semper quis lectus. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pharetra sit amet aliquam id diam maecenas.

                    Id interdum velit laoreet id. Nam at lectus urna duis convallis convallis tellus. Tristique risus nec feugiat in. Euismod lacinia at quis risus sed vulputate odio ut. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Ut ornare lectus sit amet est placerat in egestas. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Ipsum dolor sit amet consectetur. Natoque penatibus et magnis dis. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Tellus mauris a diam maecenas sed. Amet consectetur adipiscing elit ut aliquam purus. Duis at consectetur lorem donec massa. Odio eu feugiat pretium nibh ipsum consequat. Aliquet bibendum enim facilisis gravida neque convallis a cras. Ipsum dolor sit amet consectetur. Purus in mollis nunc sed id semper risus in hendrerit. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Accumsan in nisl nisi scelerisque eu ultrices.

                    Ac odio tempor orci dapibus ultrices in iaculis nunc. Ac auctor augue mauris augue neque gravida in fermentum et. Et sollicitudin ac orci phasellus egestas tellus. Quis lectus nulla at volutpat diam ut venenatis. Quam adipiscing vitae proin sagittis nisl. Adipiscing at in tellus integer. Nisi est sit amet facilisis magna. A pellentesque sit amet porttitor eget dolor morbi non arcu. Lobortis scelerisque fermentum dui faucibus in ornare. A diam maecenas sed enim ut sem viverra aliquet eget.

                    Augue lacus viverra vitae congue eu consequat ac. Dui nunc mattis enim ut tellus elementum. Lacus sed viverra tellus in hac. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nec tincidunt praesent semper feugiat nibh sed. Sed turpis tincidunt id aliquet risus feugiat in. Aliquet eget sit amet tellus cras adipiscing enim. Diam maecenas sed enim ut sem viverra. Metus dictum at tempor commodo. Faucibus purus in massa tempor nec. Amet tellus cras adipiscing enim eu turpis. Dapibus ultrices in iaculis nunc sed. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra.
                </div>
            </div>
        </Container>
    );
}