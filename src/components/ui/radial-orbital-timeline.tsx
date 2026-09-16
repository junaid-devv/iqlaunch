"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

export interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function RadialOrbitalTimeline({
  timelineData,
  title,
  subtitle,
  compact = false,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [viewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.25) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    // Adapt radius for compact side-graphic or mobile viewports
    const radius = compact
      ? (isMobile ? 120 : 165)
      : (isMobile ? 135 : 200);

    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.45,
      Math.min(1, 0.45 + 0.55 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-emerald-300 bg-emerald-950/80 border-emerald-500/40";
      case "in-progress":
        return "text-white bg-white/10 border-white/40";
      case "pending":
        return "text-zinc-400 bg-zinc-900 border-white/10";
      default:
        return "text-zinc-400 bg-zinc-900 border-white/10";
    }
  };

  const containerHeight = compact ? "h-[460px] sm:h-[520px]" : "h-[540px] sm:h-[600px]";
  const orbitDiameter = compact ? (isMobile ? 240 : 330) : (isMobile ? 270 : 400);

  return (
    <div
      className="w-full relative flex flex-col items-center justify-center bg-transparent overflow-hidden select-none"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Optional Top Overlay Title */}
      {(title || subtitle) && (
        <div className="text-center z-20 mb-3 px-4">
          {title && (
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Orbit Container */}
      <div className={`relative w-full max-w-2xl ${containerHeight} flex items-center justify-center`}>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Central Core */}
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-zinc-700 via-zinc-900 to-black border border-white/20 animate-pulse flex items-center justify-center z-10 shadow-[0_0_35px_rgba(255,255,255,0.15)]">
            <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/15 animate-ping opacity-60"></div>
            <div
              className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-white/10 animate-ping opacity-30"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-black font-bold tracking-tighter">
              <span className="text-[11px] leading-none">iQL</span>
            </div>
          </div>

          {/* Concentric Orbit Guide Rings */}
          <div
            className="absolute rounded-full border border-white/[0.08] pointer-events-none"
            style={{ width: `${orbitDiameter}px`, height: `${orbitDiameter}px` }}
          />
          <div
            className="absolute rounded-full border border-dashed border-white/[0.04] pointer-events-none"
            style={{ width: `${orbitDiameter + 40}px`, height: `${orbitDiameter + 40}px` }}
          />

          {/* Orbiting Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Node Ambient Pulsing Aura */}
                <div
                  className={`absolute rounded-full -inset-1 pointer-events-none ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.4 + 36}px`,
                    height: `${item.energy * 0.4 + 36}px`,
                    left: `-${(item.energy * 0.4 + 36 - 36) / 2}px`,
                    top: `-${(item.energy * 0.4 + 36 - 36) / 2}px`,
                  }}
                />

                {/* Node Circular Badge */}
                <div
                  className={`
                    w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center
                    ${
                      isExpanded
                        ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-125"
                        : isRelated
                        ? "bg-white/80 text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        : "bg-zinc-950 text-white hover:border-white hover:scale-110"
                    }
                    border-2 
                    ${
                      isExpanded
                        ? "border-white"
                        : isRelated
                        ? "border-white animate-pulse"
                        : "border-white/30"
                    }
                    transition-all duration-300 transform
                  `}
                >
                  <Icon size={16} />
                </div>

                {/* Node Title Label */}
                <div
                  className={`
                    absolute top-11 sm:top-13 left-1/2 -translate-x-1/2 whitespace-nowrap
                    text-[10px] sm:text-xs font-medium tracking-wide
                    transition-all duration-300
                    ${isExpanded ? "text-white font-semibold scale-110" : "text-zinc-400"}
                  `}
                >
                  {item.title}
                </div>

                {/* Expanded Detail Card Popup */}
                {isExpanded && (
                  <Card className="absolute top-16 sm:top-18 left-1/2 -translate-x-1/2 w-64 sm:w-72 bg-zinc-950/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-visible z-50">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/40"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 py-0.5 text-[9px] font-mono tracking-wider ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-sm font-bold text-white mt-1.5">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-zinc-300 space-y-2.5">
                      <p className="leading-relaxed text-[11px] sm:text-xs">{item.content}</p>

                      {/* Velocity / Progress Bar */}
                      <div className="pt-2 border-t border-white/[0.08]">
                        <div className="flex justify-between items-center text-[10px] mb-1 text-zinc-400 font-mono">
                          <span className="flex items-center gap-1">
                            <Zap size={10} className="text-white" />
                            Trajectory Velocity
                          </span>
                          <span className="text-white font-semibold">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-zinc-200 via-white to-emerald-400"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>

                      {/* Connected Next Steps */}
                      {item.relatedIds.length > 0 && (
                        <div className="pt-2 border-t border-white/[0.08]">
                          <div className="flex items-center mb-1 text-zinc-400">
                            <LinkIcon size={10} className="mr-1 text-zinc-500" />
                            <h4 className="text-[9px] uppercase tracking-wider font-mono">
                              Sequential Node
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2 text-[10px] rounded-md border-white/15 bg-white/[0.03] hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  <span>{relatedItem?.title}</span>
                                  <ArrowRight size={9} className="ml-1 text-zinc-400" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center text-[10px] font-mono text-zinc-600 mt-1">
        Interactive Orbital Engine · Click any node to inspect trajectory
      </div>
    </div>
  );
}