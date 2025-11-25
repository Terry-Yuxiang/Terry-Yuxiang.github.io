import React, { useState } from 'react';
import { Ticket, Mountain, Snowflake, Video, PlayCircle, ArrowLeft, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import skiHeroImage from '../assets/hero-image-ski.png';

const Skiing = () => {
    const [view, setView] = useState('selection'); // 'selection', 'log', 'videos'
    const [expandedCollections, setExpandedCollections] = useState({ 0: true, 1: true });

    const toggleCollection = (index) => {
        setExpandedCollections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const logs = [
        {
            id: 1,
            date: 'November 2024',
            title: 'The Journey Begins',
            description: "Officially purchased my Ikon Pass! I have no idea what I'm doing yet, but I'm excited to learn. Gear is packed (mentally), and I'm ready to hit the slopes... eventually.",
            status: 'Rookie',
            icon: <Ticket size={20} />
        }
    ];

    const videoCollections = [
        {
            title: "Backside Slipping",
            description: "Mastering the basics of board control.",
            videos: [
                {
                    id: 'local-1',
                    title: 'One Foot Backside Slipping',
                    thumbnail: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Video+Coming+Soon', // Placeholder
                    url: '#',
                    type: 'external',
                    duration: '0:30', // Estimated
                }
            ]
        },
        {
            title: "Recommended Resources",
            description: "Helpful tutorials from around the web.",
            videos: [
                {
                    id: 1,
                    title: 'How to Ski: A Beginner’s Guide',
                    thumbnail: 'https://img.youtube.com/vi/ylZ65I5ij8s/maxresdefault.jpg', // Placeholder
                    url: 'https://www.youtube.com/watch?v=ylZ65I5ij8s',
                    duration: '10:15',
                    type: 'external'
                },
                {
                    id: 2,
                    title: 'First Time Skiing Mistakes',
                    thumbnail: 'https://img.youtube.com/vi/q1yZ7f8y8w8/maxresdefault.jpg', // Placeholder
                    url: 'https://www.youtube.com/watch?v=q1yZ7f8y8w8',
                    duration: '8:45',
                    type: 'external'
                },
                {
                    id: 3,
                    title: 'Pizza vs French Fry',
                    thumbnail: 'https://img.youtube.com/vi/xyz123/maxresdefault.jpg', // Placeholder
                    url: '#',
                    duration: '5:30',
                    type: 'external'
                }
            ]
        }
    ];

    const renderSelection = () => (
        <div className="selection-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
        }}>
            <div
                onClick={() => setView('log')}
                className="selection-card"
                style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '16px',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}
            >
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--primary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginBottom: '1rem'
                }}>
                    <BookOpen size={40} />
                </div>
                <h2 style={{ fontSize: '2rem', margin: 0, color: 'var(--text-color)' }}>Career Log</h2>
                <p style={{ color: 'var(--secondary-text)', fontSize: '1.1rem' }}>
                    Track my progress, milestones, and adventures on the mountain.
                </p>
            </div>

            <div
                onClick={() => setView('videos')}
                className="selection-card"
                style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '16px',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}
            >
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: '#ff6b6b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginBottom: '1rem'
                }}>
                    <Video size={40} />
                </div>
                <h2 style={{ fontSize: '2rem', margin: 0, color: 'var(--text-color)' }}>Teaching Videos</h2>
                <p style={{ color: 'var(--secondary-text)', fontSize: '1.1rem' }}>
                    Curated video resources and tutorials that are helping me learn.
                </p>
            </div>
        </div>
    );

    const renderCareerLog = () => (
        <div className="career-log-view">
            <button
                onClick={() => setView('selection')}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--secondary-text)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    marginBottom: '2rem',
                    padding: '0.5rem 0'
                }}
            >
                <ArrowLeft size={20} /> Back to Menu
            </button>

            <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Career Log</h2>
                <p style={{ color: 'var(--secondary-text)' }}>Tracking my progress down the mountain.</p>
            </div>

            <div className="timeline" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {logs.map((log, index) => (
                    <div key={log.id} className="timeline-item" style={{
                        display: 'flex',
                        gap: '2rem',
                        marginBottom: '3rem',
                        position: 'relative'
                    }}>
                        <div className="timeline-marker" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            minWidth: '60px'
                        }}>
                            <div className="marker-circle" style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--primary-color)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                zIndex: 2,
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                            }}>
                                {log.icon}
                            </div>
                            <div className="timeline-line" style={{
                                width: '2px',
                                backgroundColor: 'var(--card-border)',
                                flex: 1,
                                marginTop: '10px',
                                marginBottom: '10px'
                            }}></div>
                        </div>
                        <div className="timeline-content" style={{
                            background: 'var(--card-bg)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid var(--card-border)',
                            flex: 1,
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                        }}>
                            <span className="date" style={{
                                fontSize: '0.85rem',
                                color: 'var(--primary-color)',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                display: 'block',
                                marginBottom: '0.5rem'
                            }}>{log.date}</span>
                            <h2 style={{ margin: '0 0 1rem', fontSize: '1.5rem', color: 'var(--text-color)' }}>{log.title}</h2>
                            <p style={{ color: 'var(--secondary-text)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{log.description}</p>
                            <div className="tags" style={{ display: 'flex', gap: '0.5rem' }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '20px',
                                    background: 'var(--bg-color)',
                                    border: '1px solid var(--card-border)',
                                    color: 'var(--secondary-text)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}>
                                    <Snowflake size={12} />
                                    Status: {log.status}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Future Placeholder */}
                <div className="timeline-item" style={{
                    display: 'flex',
                    gap: '2rem',
                    marginBottom: '3rem',
                    opacity: 0.6
                }}>
                    <div className="timeline-marker" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: '60px'
                    }}>
                        <div className="marker-circle" style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--card-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--secondary-text)'
                        }}>
                            <Mountain size={20} />
                        </div>
                    </div>
                    <div className="timeline-content" style={{
                        background: 'transparent',
                        padding: '2rem',
                        borderRadius: '12px',
                        border: '2px dashed var(--card-border)',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ margin: '0', fontSize: '1.2rem', color: 'var(--secondary-text)' }}>Next Adventure Loading...</h2>
                        <p style={{ marginTop: '0.5rem', color: 'var(--secondary-text)', fontSize: '0.9rem' }}>Planning the first trip to the mountains!</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTeachingVideos = () => (
        <div className="teaching-videos-view">
            <button
                onClick={() => setView('selection')}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--secondary-text)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    marginBottom: '2rem',
                    padding: '0.5rem 0'
                }}
            >
                <ArrowLeft size={20} /> Back to Menu
            </button>

            <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Teaching Videos</h2>
                <p style={{ color: 'var(--secondary-text)' }}>Helpful resources I'm using to learn.</p>
            </div>

            {videoCollections.map((collection, index) => (
                <div key={index} className="video-collection" style={{ marginBottom: '2rem', border: '1px solid var(--card-border)', borderRadius: '12px', overflow: 'hidden', background: 'var(--card-bg)' }}>
                    <div
                        onClick={() => toggleCollection(index)}
                        style={{
                            padding: '1.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            background: expandedCollections[index] ? 'var(--bg-color)' : 'transparent',
                            borderBottom: expandedCollections[index] ? '1px solid var(--card-border)' : 'none'
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.25rem', color: 'var(--text-color)' }}>{collection.title}</h3>
                            <p style={{ margin: 0, color: 'var(--secondary-text)', fontSize: '0.9rem' }}>{collection.description}</p>
                        </div>
                        <div style={{ color: 'var(--secondary-text)' }}>
                            {expandedCollections[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                    </div>

                    {expandedCollections[index] && (
                        <div className="videos-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                            gap: '2rem',
                            padding: '2rem'
                        }}>
                            {collection.videos.map((video) => (
                                <div key={video.id} className="video-card" style={{
                                    background: 'var(--card-bg)',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--card-border)',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    {video.type === 'local' ? (
                                        <div className="video-player-container" style={{ background: '#000', width: '100%', aspectRatio: video.aspectRatio || '16/9' }}>
                                            <video
                                                controls
                                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                src={video.videoSrc}
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    ) : (
                                        <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                                            <div className="video-thumbnail" style={{
                                                position: 'relative',
                                                height: '180px',
                                                backgroundColor: '#000',
                                                overflow: 'hidden'
                                            }}>
                                                <img src={video.thumbnail} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                                                <div className="play-icon" style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    color: 'white',
                                                    opacity: 0.9
                                                }}>
                                                    <PlayCircle size={48} />
                                                </div>
                                                <span style={{
                                                    position: 'absolute',
                                                    bottom: '10px',
                                                    right: '10px',
                                                    background: 'rgba(0,0,0,0.7)',
                                                    color: 'white',
                                                    padding: '2px 6px',
                                                    borderRadius: '4px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 'bold'
                                                }}>{video.duration}</span>
                                            </div>
                                        </a>
                                    )}

                                    <div className="video-info" style={{ padding: '1.5rem', flex: 1 }}>
                                        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: 'var(--text-color)', lineHeight: '1.4' }}>
                                            {video.type === 'external' ? (
                                                <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{video.title}</a>
                                            ) : (
                                                video.title
                                            )}
                                        </h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--secondary-text)', fontSize: '0.85rem' }}>
                                            <Video size={14} />
                                            <span>{video.type === 'local' ? 'My Recording' : 'Video Resource'}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className="ski-page">
            <div className="ski-hero" style={{
                backgroundImage: `url(${skiHeroImage})`,
                height: '60vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                color: 'white'
            }}>
                <div className="overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)'
                }}></div>
                <div className="ski-hero-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 1rem' }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Ski Log</h1>
                    <p style={{ fontSize: '1.5rem', opacity: 0.9, fontWeight: 300 }}>From Rookie to... Slightly Less Rookie</p>
                </div>
            </div>

            <div className="ski-content" style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
                {view === 'selection' && renderSelection()}
                {view === 'log' && renderCareerLog()}
                {view === 'videos' && renderTeachingVideos()}
            </div>
        </div>
    );
};

export default Skiing;
